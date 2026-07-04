import { Component, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <mat-toolbar class="app-toolbar">
      <button mat-icon-button (click)="toggleLeft.emit()" aria-label="Toggle Navigation">
        <mat-icon>menu</mat-icon>
      </button>

      <span class="logo">
        <mat-icon class="logo-icon">blur_on</mat-icon>
        <span class="logo-text">Laser Box <span class="accent-text">Designer</span></span>
      </span>

      <span class="spacer"></span>

      <!-- Action items -->
      <button mat-icon-button matTooltip="New Project">
        <mat-icon>note_add</mat-icon>
      </button>
      <button mat-icon-button matTooltip="Open Project">
        <mat-icon>folder_open</mat-icon>
      </button>
      <button mat-icon-button matTooltip="Save Project">
        <mat-icon>save</mat-icon>
      </button>

      <span class="divider"></span>

      <!-- Light / Dark toggle -->
      <button
        mat-icon-button
        (click)="toggleTheme.emit()"
        [matTooltip]="isDarkMode() ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
      >
        <mat-icon>{{ isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>

      <button mat-icon-button (click)="toggleRight.emit()" matTooltip="Toggle Properties">
        <mat-icon>tune</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
      .app-toolbar {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(var(--surface-color-rgb, 20, 20, 25), 0.7) !important;
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding: 0 16px;
        height: 64px;
        color: #fff;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.5px;
        margin-left: 8px;
      }
      .logo-icon {
        color: var(--mat-sys-primary, #6366f1);
        font-size: 28px;
        height: 28px;
        width: 28px;
      }
      .logo-text {
        background: linear-gradient(135deg, #fff 60%, rgba(255, 255, 255, 0.7));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .accent-text {
        background: linear-gradient(135deg, #a78bfa, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .spacer {
        flex: 1 1 auto;
      }
      .divider {
        width: 1px;
        height: 24px;
        background: rgba(255, 255, 255, 0.1);
        margin: 0 8px;
      }
    `
  ]
})
export class ToolbarComponent {
  isDarkMode = input<boolean>(true);
  @Output() toggleLeft = new EventEmitter<void>();
  @Output() toggleRight = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
}

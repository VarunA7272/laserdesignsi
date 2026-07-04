import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar';
import { LeftSidebarComponent } from './left-sidebar';
import { RightSidebarComponent } from './right-sidebar';
import { StatusBarComponent } from './status-bar';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    ToolbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    StatusBarComponent
  ],
  template: `
    <div class="app-layout-wrapper" [class.dark-theme]="isDarkMode()">
      <app-toolbar
        [isDarkMode]="isDarkMode()"
        (toggleLeft)="leftOpen.set(!leftOpen())"
        (toggleRight)="rightOpen.set(!rightOpen())"
        (toggleTheme)="toggleTheme()"
      >
      </app-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <!-- Left Sidenav (Navigation) -->
        <mat-sidenav [opened]="leftOpen()" mode="side" class="left-sidenav">
          <app-left-sidebar></app-left-sidebar>
        </mat-sidenav>

        <!-- Right Sidenav (Properties) -->
        <mat-sidenav [opened]="rightOpen()" position="end" mode="side" class="right-sidenav">
          <app-right-sidebar></app-right-sidebar>
        </mat-sidenav>

        <!-- Main Workspace Contents -->
        <mat-sidenav-content class="main-workspace">
          <div class="workspace-viewport">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>

      <app-status-bar></app-status-bar>
    </div>
  `,
  styles: [
    `
      .app-layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #0f0f13;
        font-family: 'Inter', sans-serif;
      }

      /* Layout theming overrides */
      .app-layout-wrapper.dark-theme {
        --surface-color-rgb: 20, 20, 25;
        background: #09090b;
        color: #fff;
      }

      .app-layout-wrapper:not(.dark-theme) {
        --surface-color-rgb: 245, 245, 250;
        background: #f4f4f5;
        color: #09090b;

        .left-sidenav,
        .right-sidenav {
          background: #f4f4f5;
          border-color: rgba(0, 0, 0, 0.08);
        }
        .app-toolbar {
          background: rgba(255, 255, 255, 0.8) !important;
          border-bottom-color: rgba(0, 0, 0, 0.08);
          color: #09090b;
        }
        .logo-text {
          background: linear-gradient(135deg, #09090b 60%, rgba(9, 9, 11, 0.7));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sidebar-container {
          background: rgba(0, 0, 0, 0.02);
          border-color: rgba(0, 0, 0, 0.08);
          color: #09090b;
        }
        .section-title {
          color: rgba(0, 0, 0, 0.5);
        }
        .nav-item-link {
          color: rgba(0, 0, 0, 0.7) !important;
        }
        .nav-item-link:hover {
          background: rgba(0, 0, 0, 0.04) !important;
          color: #000 !important;
        }
        .active-link {
          background: rgba(99, 102, 241, 0.08) !important;
          color: var(--mat-sys-primary, #4f46e5) !important;
          border-left-color: var(--mat-sys-primary, #6366f1) !important;
        }
        .custom-panel {
          background: #fff !important;
          border-color: rgba(0, 0, 0, 0.08) !important;
          color: #000 !important;
        }
        .custom-panel ::ng-deep .mat-expansion-panel-header-title {
          color: #000 !important;
        }
        .toggle-container {
          color: rgba(0, 0, 0, 0.7);
        }
        .sidebar-actions,
        .sidebar-footer {
          background: rgba(0, 0, 0, 0.02);
          border-color: rgba(0, 0, 0, 0.08);
        }
        .user-name {
          color: #000;
        }
        .user-role {
          color: rgba(0, 0, 0, 0.5);
        }
        .status-bar-container {
          background: #f4f4f5;
          border-top-color: rgba(0, 0, 0, 0.08);
          color: rgba(0, 0, 0, 0.6);
        }
        .status-text {
          color: rgba(0, 0, 0, 0.8);
        }
        .status-icon {
          color: rgba(0, 0, 0, 0.4);
        }
      }

      .sidenav-container {
        flex: 1;
        background: transparent !important;
      }

      .left-sidenav {
        width: 260px;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        background: transparent;
      }

      .right-sidenav {
        width: 320px;
        border-left: 1px solid rgba(255, 255, 255, 0.08);
        background: transparent;
      }

      .main-workspace {
        background: transparent;
        overflow: hidden;
      }

      .workspace-viewport {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        padding: 24px;
        box-sizing: border-box;
      }
    `
  ]
})
export class LayoutComponent {
  isDarkMode = signal<boolean>(true);
  leftOpen = signal<boolean>(true);
  rightOpen = signal<boolean>(true);

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());

    const body = document.body;
    if (this.isDarkMode()) {
      body.style.colorScheme = 'dark';
    } else {
      body.style.colorScheme = 'light';
    }
  }
}

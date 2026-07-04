import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-status-bar',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="status-bar-container">
      <div class="status-left">
        <span class="status-indicator online"></span>
        <span class="status-text">System Ready</span>
        <span class="divider"></span>
        <span class="status-details">Laser: Connected (CO2 80W)</span>
      </div>

      <div class="status-right">
        <span class="status-item">
          <mat-icon class="status-icon">square_foot</mat-icon>
          Grid: 10mm
        </span>
        <span class="divider"></span>
        <span class="status-item">
          <mat-icon class="status-icon">zoom_in</mat-icon>
          Zoom: 100%
        </span>
        <span class="divider"></span>
        <span class="status-item highlight">
          <mat-icon class="status-icon">straighten</mat-icon>
          Units: MM
        </span>
      </div>
    </div>
  `,
  styles: [
    `
      .status-bar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 28px;
        background: rgba(var(--surface-color-rgb, 15, 15, 20), 0.9);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding: 0 16px;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.6);
        user-select: none;
      }
      .status-left,
      .status-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .status-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .status-indicator.online {
        background: #10b981;
        box-shadow: 0 0 8px #10b981;
      }
      .status-text {
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
      }
      .divider {
        width: 1px;
        height: 12px;
        background: rgba(255, 255, 255, 0.15);
      }
      .status-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .status-icon {
        font-size: 14px;
        width: 14px;
        height: 14px;
        color: rgba(255, 255, 255, 0.4);
      }
      .highlight {
        color: var(--mat-sys-primary, #818cf8);
        font-weight: 600;
      }
    `
  ]
})
export class StatusBarComponent {}

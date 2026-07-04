import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-left-sidebar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="sidebar-container">
      <div class="sidebar-header">
        <span class="section-title">Design Workspace</span>
      </div>

      <mat-nav-list class="nav-list">
        @for (item of navItems; track item.path) {
          <a
            mat-list-item
            [routerLink]="[item.path]"
            routerLinkActive="active-link"
            #rla="routerLinkActive"
            [activated]="rla.isActive"
            class="nav-item-link"
          >
            <mat-icon matListItemIcon class="nav-icon">{{ item.icon }}</mat-icon>
            <span matListItemTitle class="nav-label">{{ item.label }}</span>
          </a>
        }
      </mat-nav-list>

      <div class="sidebar-footer">
        <div class="user-profile">
          <div class="avatar">M</div>
          <div class="profile-info">
            <span class="user-name">Maker Pro</span>
            <span class="user-role">Designer Mode</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .sidebar-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: rgba(var(--surface-color-rgb, 20, 20, 25), 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        color: #fff;
      }
      .sidebar-header {
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
      .section-title {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: rgba(255, 255, 255, 0.4);
      }
      .nav-list {
        flex: 1;
        padding-top: 12px !important;
      }
      .nav-item-link {
        margin: 4px 8px !important;
        border-radius: 8px !important;
        height: 48px !important;
        transition: all 0.2s ease-in-out !important;
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .nav-item-link:hover {
        background: rgba(255, 255, 255, 0.05) !important;
        color: #fff !important;
      }
      .active-link {
        background: rgba(99, 102, 241, 0.15) !important;
        color: var(--mat-sys-primary, #818cf8) !important;
        border-left: 3px solid var(--mat-sys-primary, #6366f1) !important;
      }
      .nav-icon {
        margin-right: 12px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        transition: transform 0.2s ease;
      }
      .nav-item-link:hover .nav-icon {
        transform: scale(1.1);
      }
      .active-link .nav-icon {
        color: var(--mat-sys-primary, #818cf8);
      }
      .nav-label {
        font-size: 0.9rem;
        font-weight: 500;
      }
      .sidebar-footer {
        padding: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        background: rgba(0, 0, 0, 0.1);
      }
      .user-profile {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
        font-size: 0.9rem;
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
      }
      .profile-info {
        display: flex;
        flex-direction: column;
      }
      .user-name {
        font-size: 0.85rem;
        font-weight: 600;
        color: #fff;
      }
      .user-role {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.4);
      }
    `
  ]
})
export class LeftSidebarComponent {
  navItems = [
    { path: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: 'project', label: 'Project Info', icon: 'info' },
    { path: 'materials', label: 'Materials', icon: 'layers' },
    { path: 'geometry', label: 'Box Geometry', icon: 'view_in_ar' },
    { path: 'finger-joints', label: 'Finger Joints', icon: 'grid_on' },
    { path: 'living-hinges', label: 'Living Hinges', icon: 'texture' },
    { path: 'svg-preview', label: 'SVG Preview', icon: 'grid_view' },
    { path: 'export', label: 'Export CNC/SVG', icon: 'download' },
    { path: 'settings', label: 'Settings', icon: 'settings' }
  ];
}

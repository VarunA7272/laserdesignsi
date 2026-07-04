import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-right-sidebar',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="sidebar-container">
      <div class="sidebar-header">
        <span class="section-title">Quick Settings</span>
      </div>

      <div class="panels-container">
        <!-- Panel 1: Document -->
        <mat-accordion multi>
          <mat-expansion-panel expanded class="custom-panel">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon class="panel-icon">folder</mat-icon>
                Document Settings
              </mat-panel-title>
            </mat-expansion-panel-header>

            <div class="panel-content">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Unit System</mat-label>
                <mat-select value="mm">
                  <mat-option value="mm">Millimeters (mm)</mat-option>
                  <mat-option value="inch">Inches (in)</mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Kerf Compensation</mat-label>
                <input matInput type="number" value="0.15">
                <span matSuffix>mm</span>
              </mat-form-field>
            </div>
          </mat-expansion-panel>

          <!-- Panel 2: Material -->
          <mat-expansion-panel class="custom-panel">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon class="panel-icon">layers</mat-icon>
                Material Info
              </mat-panel-title>
            </mat-expansion-panel-header>

            <div class="panel-content">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Thickness</mat-label>
                <input matInput type="number" value="3.0">
                <span matSuffix>mm</span>
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Material Type</mat-label>
                <mat-select value="plywood">
                  <mat-option value="plywood">Birch Plywood</mat-option>
                  <mat-option value="mdf">MDF</mat-option>
                  <mat-option value="acrylic">Acrylic (PMMA)</mat-option>
                  <mat-option value="cardboard">Cardboard</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </mat-expansion-panel>

          <!-- Panel 3: Joint Settings -->
          <mat-expansion-panel class="custom-panel">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon class="panel-icon">grid_on</mat-icon>
                Joint Settings
              </mat-panel-title>
            </mat-expansion-panel-header>

            <div class="panel-content">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Tab Width</mat-label>
                <input matInput type="number" value="8.0">
                <span matSuffix>mm</span>
              </mat-form-field>

              <div class="toggle-container">
                <mat-slide-toggle checked>Add Clearance</mat-slide-toggle>
              </div>
            </div>
          </mat-expansion-panel>
        </mat-accordion>
      </div>

      <div class="sidebar-actions">
        <button mat-flat-button color="primary" class="w-full action-btn">
          <mat-icon>refresh</mat-icon>
          Update Geometry
        </button>
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
        border-left: 1px solid rgba(255, 255, 255, 0.08);
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
      .panels-container {
        flex: 1;
        overflow-y: auto;
        padding: 8px;
      }
      .custom-panel {
        background: rgba(255, 255, 255, 0.02) !important;
        border: 1px solid rgba(255, 255, 255, 0.05) !important;
        margin-bottom: 8px !important;
        border-radius: 8px !important;
        color: #fff !important;
      }
      .custom-panel ::ng-deep .mat-expansion-panel-header-title {
        color: rgba(255, 255, 255, 0.9) !important;
        font-size: 0.85rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .panel-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
        color: var(--mat-sys-primary, #818cf8);
      }
      .panel-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px 4px 4px 4px;
      }
      .w-full {
        width: 100%;
      }
      .toggle-container {
        padding: 4px 0;
        color: rgba(255, 255, 255, 0.7);
      }
      .sidebar-actions {
        padding: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
      }
      .action-btn {
        height: 44px;
        border-radius: 8px;
        background: linear-gradient(135deg, #6366f1, #4f46e5) !important;
        color: #fff !important;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
      }
    `
  ]
})
export class RightSidebarComponent {}

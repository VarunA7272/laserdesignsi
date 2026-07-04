import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  template: `
    <div class="feature-card">
      <h1 class="feature-title">Export</h1>
      <p class="feature-desc">Laser Box Designer: Export feature module architecture initialized.</p>
    </div>
  `,
  styles: [`
    .feature-card {
      padding: 24px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    .feature-title {
      font-size: 2rem;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #a78bfa, #f472b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .feature-desc {
      opacity: 0.8;
      font-size: 1rem;
    }
  `]
})
export class ExportComponent {
}

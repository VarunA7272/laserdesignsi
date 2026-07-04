import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/components/dashboard').then((m) => m.DashboardComponent)
  },
  {
    path: 'project',
    loadComponent: () =>
      import('./features/project/components/project').then((m) => m.ProjectComponent)
  },
  {
    path: 'materials',
    loadComponent: () =>
      import('./features/materials/components/materials').then((m) => m.MaterialsComponent)
  },
  {
    path: 'geometry',
    loadComponent: () =>
      import('./features/geometry/components/geometry').then((m) => m.GeometryComponent)
  },
  {
    path: 'finger-joints',
    loadComponent: () =>
      import('./features/finger-joints/components/finger-joints').then(
        (m) => m.FingerJointsComponent
      )
  },
  {
    path: 'living-hinges',
    loadComponent: () =>
      import('./features/living-hinges/components/living-hinges').then(
        (m) => m.LivingHingesComponent
      )
  },
  {
    path: 'svg-preview',
    loadComponent: () =>
      import('./features/svg-preview/components/svg-preview').then((m) => m.SvgPreviewComponent)
  },
  {
    path: 'export',
    loadComponent: () =>
      import('./features/export/components/export').then((m) => m.ExportComponent)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/components/settings').then((m) => m.SettingsComponent)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

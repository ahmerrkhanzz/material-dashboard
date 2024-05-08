import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  },
];

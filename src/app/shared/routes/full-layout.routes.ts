import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  },
  {
    path: 'components',
    loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'adminapi',
    loadChildren: () => import('../../adminapi/adminapi.module').then(m => m.AdminapiModule)
  }
];

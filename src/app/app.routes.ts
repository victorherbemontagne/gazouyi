import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { BlogComponent } from './blog/blog.component';


export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


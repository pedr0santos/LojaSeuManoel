import { Routes } from '@angular/router';
import { LayoutComponent } from './presentation/components/templates/layout/layout.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent, // Envolvendo todas as rotas com o layout principal
    children: [
    ],
  },
];

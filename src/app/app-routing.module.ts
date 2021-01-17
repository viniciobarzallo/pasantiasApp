import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'instalacion',
    loadChildren: () => import('./paginas/instalacion/instalacion.module').then( m => m.InstalacionPageModule)
  },
  {
    path: 'visita',
    loadChildren: () => import('./paginas/visita/visita.module').then( m => m.VisitaPageModule)
  },
  {
    path: 'nuevains',
    loadChildren: () => import('./paginas/nuevains/nuevains.module').then( m => m.NuevainsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

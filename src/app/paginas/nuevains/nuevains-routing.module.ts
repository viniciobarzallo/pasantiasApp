import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevainsPage } from './nuevains.page';

const routes: Routes = [
  {
    path: '',
    component: NuevainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevainsPageRoutingModule {}

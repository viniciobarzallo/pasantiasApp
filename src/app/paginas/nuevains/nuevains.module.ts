import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevainsPageRoutingModule } from './nuevains-routing.module';

import { NuevainsPage } from './nuevains.page';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    NuevainsPageRoutingModule
  ],
  declarations: [NuevainsPage]
})
export class NuevainsPageModule {}

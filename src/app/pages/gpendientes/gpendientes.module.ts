import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpendientesPageRoutingModule } from './gpendientes-routing.module';

import { GpendientesPage } from './gpendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpendientesPageRoutingModule
  ],
  declarations: [GpendientesPage]
})
export class GpendientesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagogastosPageRoutingModule } from './pagogastos-routing.module';

import { PagogastosPage } from './pagogastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagogastosPageRoutingModule
  ],
  declarations: [PagogastosPage]
})
export class PagogastosPageModule {}

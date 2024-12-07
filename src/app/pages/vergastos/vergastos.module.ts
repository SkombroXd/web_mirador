import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VergastosPageRoutingModule } from './vergastos-routing.module';
import { VergastosPage } from './vergastos.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    VergastosPageRoutingModule
  ],
  declarations: [VergastosPage]
})
export class VergastosPageModule {}

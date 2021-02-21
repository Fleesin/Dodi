import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tienda1PageRoutingModule } from './tienda1-routing.module';

import { Tienda1Page } from './tienda1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tienda1PageRoutingModule
  ],
  declarations: [Tienda1Page]
})
export class Tienda1PageModule {}

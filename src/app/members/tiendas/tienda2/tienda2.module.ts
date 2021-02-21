import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tienda2PageRoutingModule } from './tienda2-routing.module';

import { Tienda2Page } from './tienda2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tienda2PageRoutingModule
  ],
  declarations: [Tienda2Page]
})
export class Tienda2PageModule {}

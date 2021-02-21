import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tienda3PageRoutingModule } from './tienda3-routing.module';

import { Tienda3Page } from './tienda3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tienda3PageRoutingModule
  ],
  declarations: [Tienda3Page]
})
export class Tienda3PageModule {}

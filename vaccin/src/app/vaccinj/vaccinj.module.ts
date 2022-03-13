import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinjPageRoutingModule } from './vaccinj-routing.module';

import { VaccinjPage } from './vaccinj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinjPageRoutingModule
  ],
  declarations: [VaccinjPage]
})
export class VaccinjPageModule {}

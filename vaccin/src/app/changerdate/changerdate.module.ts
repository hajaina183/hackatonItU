import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangerdatePageRoutingModule } from './changerdate-routing.module';

import { ChangerdatePage } from './changerdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangerdatePageRoutingModule
  ],
  declarations: [ChangerdatePage]
})
export class ChangerdatePageModule {}

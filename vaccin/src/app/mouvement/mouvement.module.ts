import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MouvementPageRoutingModule } from './mouvement-routing.module';

import { MouvementPage } from './mouvement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MouvementPageRoutingModule
  ],
  declarations: [MouvementPage]
})
export class MouvementPageModule {}

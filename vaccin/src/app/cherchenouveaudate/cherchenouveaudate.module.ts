import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CherchenouveaudatePageRoutingModule } from './cherchenouveaudate-routing.module';

import { CherchenouveaudatePage } from './cherchenouveaudate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CherchenouveaudatePageRoutingModule
  ],
  declarations: [CherchenouveaudatePage]
})
export class CherchenouveaudatePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenotifdatePageRoutingModule } from './renotifdate-routing.module';

import { RenotifdatePage } from './renotifdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenotifdatePageRoutingModule
  ],
  declarations: [RenotifdatePage]
})
export class RenotifdatePageModule {}

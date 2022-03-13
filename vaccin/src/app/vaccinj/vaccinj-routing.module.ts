import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinjPage } from './vaccinj.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinjPageRoutingModule {}

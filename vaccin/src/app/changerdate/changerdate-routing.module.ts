import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangerdatePage } from './changerdate.page';

const routes: Routes = [
  {
    path: '',
    component: ChangerdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangerdatePageRoutingModule {}

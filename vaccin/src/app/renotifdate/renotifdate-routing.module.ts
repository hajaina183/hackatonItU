import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenotifdatePage } from './renotifdate.page';

const routes: Routes = [
  {
    path: '',
    component: RenotifdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenotifdatePageRoutingModule {}

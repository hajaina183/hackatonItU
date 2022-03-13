import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MouvementPage } from './mouvement.page';

const routes: Routes = [
  {
    path: '',
    component: MouvementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MouvementPageRoutingModule {}

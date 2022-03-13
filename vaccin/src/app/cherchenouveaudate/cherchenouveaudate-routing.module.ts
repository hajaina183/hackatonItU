import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CherchenouveaudatePage } from './cherchenouveaudate.page';

const routes: Routes = [
  {
    path: '',
    component: CherchenouveaudatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CherchenouveaudatePageRoutingModule {}

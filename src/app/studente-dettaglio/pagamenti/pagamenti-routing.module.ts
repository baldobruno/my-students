import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentiPage } from './pagamenti.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentiPageRoutingModule {}

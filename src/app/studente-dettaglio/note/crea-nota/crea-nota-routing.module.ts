import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaNotaPage } from './crea-nota.page';

const routes: Routes = [
  {
    path: '',
    component: CreaNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaNotaPageRoutingModule {}

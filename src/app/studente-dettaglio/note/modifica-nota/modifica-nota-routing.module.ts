import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaNotaPage } from './modifica-nota.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaNotaPageRoutingModule {}

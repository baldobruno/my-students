import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaPagamentoPage } from './modifica-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaPagamentoPageRoutingModule {}

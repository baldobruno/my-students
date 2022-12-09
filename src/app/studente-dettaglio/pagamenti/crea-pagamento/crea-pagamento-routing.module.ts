import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaPagamentoPage } from './crea-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: CreaPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaPagamentoPageRoutingModule {}

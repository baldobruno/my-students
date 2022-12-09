import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentiPage } from './pagamenti.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentiPage
  },
  {
    path: 'modifica-pagamento/:idPagamento',
    loadChildren: () => import('./modifica-pagamento/modifica-pagamento.module').then( m => m.ModificaPagamentoPageModule)
  },
  {
    path: 'crea-pagamento',
    loadChildren: () => import('./crea-pagamento/crea-pagamento.module').then( m => m.CreaPagamentoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentiPageRoutingModule {}

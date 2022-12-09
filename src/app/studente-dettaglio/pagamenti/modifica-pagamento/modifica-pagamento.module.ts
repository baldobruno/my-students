import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaPagamentoPageRoutingModule } from './modifica-pagamento-routing.module';

import { ModificaPagamentoPage } from './modifica-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificaPagamentoPageRoutingModule
  ],
  declarations: [ModificaPagamentoPage]
})
export class ModificaPagamentoPageModule {}

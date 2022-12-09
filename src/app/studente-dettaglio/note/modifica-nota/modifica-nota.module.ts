import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaNotaPageRoutingModule } from './modifica-nota-routing.module';

import { ModificaNotaPage } from './modifica-nota.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificaNotaPageRoutingModule,
  ],
  declarations: [ModificaNotaPage],
})
export class ModificaNotaPageModule {}

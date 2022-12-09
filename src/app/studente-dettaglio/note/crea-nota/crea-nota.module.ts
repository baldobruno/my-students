import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaNotaPageRoutingModule } from './crea-nota-routing.module';

import { CreaNotaPage } from './crea-nota.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CreaNotaPageRoutingModule,
  ],
  declarations: [CreaNotaPage],
})
export class CreaNotaPageModule {}

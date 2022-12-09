import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaStudentePageRoutingModule } from './crea-studente-routing.module';

import { CreaStudentePage } from './crea-studente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaStudentePageRoutingModule
  ],
  declarations: [CreaStudentePage]
})
export class CreaStudentePageModule {}

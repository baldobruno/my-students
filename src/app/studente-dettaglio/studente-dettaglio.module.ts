import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudenteDettaglioPageRoutingModule } from './studente-dettaglio-routing.module';

import { StudenteDettaglioPage } from './studente-dettaglio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudenteDettaglioPageRoutingModule
  ],
  declarations: [StudenteDettaglioPage]
})
export class StudenteDettaglioPageModule {}

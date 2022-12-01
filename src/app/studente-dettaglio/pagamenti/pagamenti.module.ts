import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentiPageRoutingModule } from './pagamenti-routing.module';

import { PagamentiPage } from './pagamenti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentiPageRoutingModule
  ],
  declarations: [PagamentiPage]
})
export class PagamentiPageModule {}

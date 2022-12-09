import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaStudentePage } from './crea-studente.page';

const routes: Routes = [
  {
    path: '',
    component: CreaStudentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaStudentePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotePage } from './note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePage
  },
  {
    path: 'modifica-nota/:idNota',
    loadChildren: () => import('./modifica-nota/modifica-nota.module').then( m => m.ModificaNotaPageModule)
  },
  {
    path: 'crea-nota',
    loadChildren: () => import('./crea-nota/crea-nota.module').then( m => m.CreaNotaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}

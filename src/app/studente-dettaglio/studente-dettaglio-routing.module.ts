import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudenteDettaglioPage } from './studente-dettaglio.page';

const routes: Routes = [
  {
    path: ':id',
    component: StudenteDettaglioPage,
    
  },
  {
    path: ':id/pagamenti',
    loadChildren: () => import('./pagamenti/pagamenti.module').then( m => m.PagamentiPageModule)
  },
  {
    path: ':id/note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudenteDettaglioPageRoutingModule {}

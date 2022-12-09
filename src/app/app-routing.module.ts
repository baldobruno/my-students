import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'studente-dettaglio',
    pathMatch:'full',
    loadChildren: () =>
      import('./studente-dettaglio/studente-dettaglio.module').then(
        (m) => m.StudenteDettaglioPageModule
      ),
  },  {
    path: 'crea-studente',
    loadChildren: () => import('./crea-studente/crea-studente.module').then( m => m.CreaStudentePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

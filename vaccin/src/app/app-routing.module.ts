import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'demande',
    loadChildren: () => import('./demande/demande.module').then( m => m.DemandePageModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'mouvement',
    loadChildren: () => import('./mouvement/mouvement.module').then( m => m.MouvementPageModule)
  },
  {
<<<<<<< HEAD
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'vaccinj',
    loadChildren: () => import('./vaccinj/vaccinj.module').then( m => m.VaccinjPageModule)
  },
  {
    path: 'renotifdate',
    loadChildren: () => import('./renotifdate/renotifdate.module').then( m => m.RenotifdatePageModule)
  },
  {
    path: 'accueiladmin',
    loadChildren: () => import('./accueiladmin/accueiladmin.module').then( m => m.AccueiladminPageModule)
  },
  {
    path: 'etatstock',
    loadChildren: () => import('./etatstock/etatstock.module').then( m => m.EtatstockPageModule)
  },
  
  {
    path: 'cherche',
    loadChildren: () => import('./cherche/cherche.module').then( m => m.CherchePageModule)
  },
  {
    path: 'changerdate',
    loadChildren: () => import('./changerdate/changerdate.module').then( m => m.ChangerdatePageModule)
  },
  {
    path: 'cherchenouveaudate',
    loadChildren: () => import('./cherchenouveaudate/cherchenouveaudate.module').then( m => m.CherchenouveaudatePageModule)
  },
  {
    path: 'retard',
    loadChildren: () => import('./retard/retard.module').then( m => m.RetardPageModule)
  },
  
];
=======
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
>>>>>>> 8f0809c697f62d52cfdd448dddc399d2a44685b5

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

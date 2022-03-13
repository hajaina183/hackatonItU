import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

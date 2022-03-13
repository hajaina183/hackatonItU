import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.page.html',
  styleUrls: ['./accueiladmin.page.scss'],
})
export class AccueiladminPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  creationCompte(){
    console.log("atoooo");
    this.router.navigate(['/inscription']);
  }
  listeVaccinJour(){
  this.router.navigate(['/vaccinj']);
  }
  reNotifier(){
  this.router.navigate(['/renotifdate']);
  }
  listeVaccinRetard(){
    this.router.navigate(['/retard']);
  }
  etatStock(){
    this.router.navigate(['/mouvement']);
  }

}

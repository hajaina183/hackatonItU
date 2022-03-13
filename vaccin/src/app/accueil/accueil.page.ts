import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  creationCompte(){
        console.log("atoooo");
        this.router.navigate(['/home']);
  }
  listeVaccinJour(){
    this.router.navigate(['/vaccinj']);
  }
  reNotifier(){
    this.router.navigate(['/renotifdate']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccinj',
  templateUrl: './vaccinj.page.html',
  styleUrls: ['./vaccinj.page.scss'],
})
export class VaccinjPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  chercher(){
    console.log("atoo");
    this.router.navigate(['/cherche']);
  }
  retour(){
    this.router.navigate(['/accueil']);
  }

}

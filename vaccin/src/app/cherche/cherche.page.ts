import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cherche',
  templateUrl: './cherche.page.html',
  styleUrls: ['./cherche.page.scss'],
})
export class CherchePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  retour(){
    this.router.navigate(['/accueil']);
  }

}

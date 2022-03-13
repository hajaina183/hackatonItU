import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retard',
  templateUrl: './retard.page.html',
  styleUrls: ['./retard.page.scss'],
})
export class RetardPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  retour(){
    this.router.navigate(['/accueiladmin']);
  }


}

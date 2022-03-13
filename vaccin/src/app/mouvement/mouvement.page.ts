import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mouvement',
  templateUrl: './mouvement.page.html',
  styleUrls: ['./mouvement.page.scss'],
})
export class MouvementPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  changerPage() {
    this.router.navigate(['/stock']);
  }

}

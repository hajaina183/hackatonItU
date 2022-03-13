import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  changerPage() {
    this.router.navigate(['/mouvement']);
  }

}

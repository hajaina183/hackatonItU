import { Component, OnInit } from '@angular/core';
import { ChangerdatePage } from '../changerdate/changerdate.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cherchenouveaudate',
  templateUrl: './cherchenouveaudate.page.html',
  styleUrls: ['./cherchenouveaudate.page.scss'],
})
export class CherchenouveaudatePage implements OnInit {

  constructor(private modalController: ModalController,private router : Router) { }

  ngOnInit() {
  }
  OpenModal() {
    this.modalController.create({component:ChangerdatePage}).then((modalElment)=>{
        modalElment.present();
      })
  }
  chercher(){
    this.router.navigate(['/cherchenouveaudate']);
  }
  retour(){
    this.router.navigate(['/accueil']);
  }

}

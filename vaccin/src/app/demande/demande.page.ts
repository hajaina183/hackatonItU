import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

  constructor(private modalController: ModalController, private router : Router) { }

  ngOnInit() {
  }

  OpenModal() {
    this.modalController.create({component:PopupPage}).then((modalElment)=>{
        modalElment.present();
      })
  }

  retour(){
    this.router.navigate(['/accueil']);
  }

}

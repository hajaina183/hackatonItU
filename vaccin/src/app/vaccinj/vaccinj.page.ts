import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsPage } from '../details/details.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vaccinj',
  templateUrl: './vaccinj.page.html',
  styleUrls: ['./vaccinj.page.scss'],
})
export class VaccinjPage implements OnInit {

  constructor(private router : Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  chercher(){
    console.log("atoo");
    this.router.navigate(['/cherche']);
  }
  retour(){
    this.router.navigate(['/accueil']);
  }
  vacciner() {
    this.modalController.create({component:DetailsPage}).then((modalElment)=>{
        modalElment.present();
      })
  }

}

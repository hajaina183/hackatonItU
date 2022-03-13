import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangerdatePage } from '../changerdate/changerdate.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renotifdate',
  templateUrl: './renotifdate.page.html',
  styleUrls: ['./renotifdate.page.scss'],
})
export class RenotifdatePage implements OnInit {


  constructor(private modalController: ModalController,private router : Router) { }



  ngOnInit() {
  }

  OpenModal() {
    this.modalController.create({component:ChangerdatePage}).then((modalElment)=>{
        modalElment.present();
      })
  }
  retour(){
    this.router.navigate(['/accueil']);
  }
  chercher(){
    this.router.navigate(['/cherchenouveaudate']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-retard',
  templateUrl: './retard.page.html',
  styleUrls: ['./retard.page.scss'],
})
export class RetardPage implements OnInit {

  constructor(private router : Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  retour(){
    this.router.navigate(['/accueiladmin']);
  }
  async showAlert() {
    await this.alertCtrl.create({
      header: "Confirmation",
      message: "Etes-vous sur d'envoyer 2 messages ?",
      buttons: [
        { text: "Oui", handler: () => {
            console.log("yes");
          }
        },
        {
          text: "Non"
        }
      ]
    }).then(res => res.present())
  }

  showAlert(){
    console.log("ok");
  }


}

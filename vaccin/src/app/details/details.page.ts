import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  CloseModal() {
    this.modalController.dismiss();
  }

}

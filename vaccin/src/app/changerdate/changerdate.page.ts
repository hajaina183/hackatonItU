import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-changerdate',
  templateUrl: './changerdate.page.html',
  styleUrls: ['./changerdate.page.scss'],
})
export class ChangerdatePage implements OnInit {
  date = new Date('2022-01-10');

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  CloseModal() {
    this.modalController.dismiss();
  }

}

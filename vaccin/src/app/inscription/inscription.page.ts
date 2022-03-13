import { Component, OnInit } from '@angular/core';
import { Vaccin } from '../models/vaccin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  vaccins! : Vaccin[];
  formulaire = {type:"", dose:"", date:""};

  constructor(private router : Router) { }

  ngOnInit() {
    this.vaccins=[
      {type: 'AstraZeneca', dose: 1, date: new Date('2022-01-10')}
  ];
  }

  ajouter() {
    var v = new Vaccin();
    v.type = this.formulaire.type;
    v.dose = Number(this.formulaire.dose);
    v.date = new Date(this.formulaire.date);
    this.vaccins.push(v);
  }

  s_inscrire() {
    this.router.navigate(['/demande']);
  }

}

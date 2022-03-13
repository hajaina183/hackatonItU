import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: string;
  mdp: string;
  formulaire = {login:"",mdp:""};

  constructor(public toastController: ToastController,private router : Router) { }

  ngOnInit() {
  }

  async traitementLogin(){
    this.login = this.formulaire.login;
    this.mdp = this.formulaire.mdp;
    console.log("login"+this.login)
    console.log("mdp"+this.mdp)
    if(this.login=="travailleur@gmail.com" && this.mdp=="1234"){
        console.log("ok");
        this.router.navigate(['/accueil']);
    }else if(this.login=="admin@gmail.com" && this.mdp=="1234"){
      this.router.navigate(['/accueiladmin']);
    }else{
      const toast = await this.toastController.create({
        message: 'Login ou mot de passe incorrect',
        duration: 2000
      });
      toast.present();
    }
}
}

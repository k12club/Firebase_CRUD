import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private afAuth: AngularFireAuth
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){

    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    } catch (error) {
      console.error(error);
    }
    

  }

  register(){

    this.navCtrl.push('RegisterPage');
  }
  ForgotPassword(){    
    this.navCtrl.push('ResetPasswordPage');
  }

}

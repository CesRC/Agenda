import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { AcercaDePage } from '../../pages/acerca-de/acerca-de';
import { ContactoPage } from '../../pages/contacto/contacto';
import { RegistroPage } from '../../pages/registro/registro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading:Loading;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.myForm = this.formBuilder.group({email: ['', Validators.required],password: ['', Validators.required]});
    this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  loginUser(){

    console.log("Usuario:" + this.myForm.value.email);
    console.log("Contraseña:" + this.myForm.value.password);
   
    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
      console.log("User logging");
      this.navCtrl.setRoot(ContactoPage);
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
  
  goToSignup(){
    this.navCtrl.push(RegistroPage);
  }

}

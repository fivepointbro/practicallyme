import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../';

/**
 * Generated class for the ClearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clear',
  templateUrl: 'clear.html',
})
export class ClearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClearPage');
  }

  resetLocalStorage(){
    localStorage.clear();
    localStorage.setItem('username', 'anon')
    this.navCtrl.push(MainPage);
  }

  letsnot(){
    this.navCtrl.push(MainPage);  
  }

}

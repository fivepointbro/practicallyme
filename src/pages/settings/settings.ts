import { Component } from '@angular/core';
import { IonicPage, LoadingController, Loading } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  loader: Loading;
  // Our local settings object
  constructor(public theInAppBrowser: InAppBrowser, public loadingCtrl: LoadingController) {
  }



booking(){
  var browser = this.theInAppBrowser.create('https://practicallyphotography.com/mobile-booking/','_blank','location=no, hidden=yes');
    this.presentLoading();
    browser.on('loadstop').subscribe(event =>
      {this.loader.dismiss()}, error => {this.loader.dismiss()}
    );
  }


  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }

}

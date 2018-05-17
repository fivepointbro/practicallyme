import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  // Our local settings object
  constructor(private theInAppBrowser: InAppBrowser) {
  }

  booking(){
    this.theInAppBrowser.create('https://practicallyphotography.com/mobile-booking/','_self','location=no');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading} from 'ionic-angular';
import { WpProvider, Pic} from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';
import { User } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'userpage.html'
})
export class UserPage {
  loader: Loading;
  pics: Observable<Pic[]>;
  id = localStorage.getItem('username');
  

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.pics = this.wpProvider.getMyPics(this.id); 
    this.pics.subscribe(data => 
      this.loader.dismiss());
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }
}
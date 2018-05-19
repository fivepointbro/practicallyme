import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, LoadingController, Loading} from 'ionic-angular';
import { WpProvider, Pic} from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'userpage.html'
})
export class UserPage {
  loader: Loading;
  pics: Observable<Pic[]>;
  id = localStorage.getItem('username');
  display: string = 'Gallery';
  

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController, public plt: Platform, public socialSharing: SocialSharing, private photoViewer: PhotoViewer) {
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

  openPic(url){
    this.photoViewer.show(url);
  }
}
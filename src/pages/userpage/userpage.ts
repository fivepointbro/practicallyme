import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading} from 'ionic-angular';
import { WpProvider, Pic} from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';
import { User } from '../../providers';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'userpage.html'
})
export class UserPage {
  loader: Loading;
  pics: Observable<Pic[]>;
  id = localStorage.getItem('username');
  

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController, private socialSharing: SocialSharing) {
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
 
  regularShare(url){
    let file = 'https://practicallyphotography.com/opsec/'+this.id+'/'+ url
    this.socialSharing.share(null, null, file, null).then(() => {
      console.log("regularShare: Success");
    }).catch(() => {
      console.error("regularShare: failed");
    });
  }
}
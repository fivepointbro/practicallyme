import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading} from 'ionic-angular';
import { WpProvider, Pic} from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';
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
  

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController, private photoViewer: PhotoViewer, private cd: ChangeDetectorRef) {
    
  }
  ionViewWillEnter(){
    this.presentLoading();
    this.pics = this.wpProvider.getMyPics(this.id); 
    this.pics.subscribe(data => 
      this.loader.dismiss());
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.pics = this.wpProvider.getMyPics(this.id);
    this.cd.detectChanges();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
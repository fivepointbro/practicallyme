import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading} from 'ionic-angular';
import { WpProvider, Promo } from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-promo',
  templateUrl: 'promo.html'
})
export class PromoPage {
  loader: Loading;
  promos: Observable<Promo[]>;

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.promos = this.wpProvider.getPromos();
    this.promos.subscribe(data => 
    this.loader.dismiss());
    
  }
 
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }

}

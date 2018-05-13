import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading} from 'ionic-angular';
import { WpProvider, Post } from '../../providers/wp/wp';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  loader: Loading;
  posts: Observable<Post[]>;

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.posts = this.wpProvider.getPosts();
    this.posts.subscribe(data => 
    this.loader.dismiss());
    
  }
 
  getUserImage(id: number) {
    return this.wpProvider.getUserImage(id);
  }
 
  getUserName(id: number) {
    return this.wpProvider.getUserName(id);
  }
 
  openPost(post: Post) {
    this.navCtrl.push('PostPage', {post: post});
  }
 
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }

}

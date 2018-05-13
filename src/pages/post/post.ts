import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../providers/wp/wp';
import { SocialSharing } from '@ionic-native/social-sharing';
 
@IonicPage()
@Component({
  selector: 'page-post-page',
  templateUrl: 'post.html',
})
export class PostPage {
  post: Post;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    this.post = navParams.get('post');
  }
  
  regularShare(){
    this.socialSharing.share(null, null, null, this.post.url).then(() => {
      console.log("regularShare: Success");
    }).catch(() => {
      console.error("regularShare: failed");
    });
  }
}
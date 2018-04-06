import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.getData();
  }

  getData(){

    this.http.get('https://www.reddit.com/r/funny/hot/.json?limit=20').subscribe(data => {
        this.posts = data['data']['children'];
        console.log(this.posts);
    });
  }

}

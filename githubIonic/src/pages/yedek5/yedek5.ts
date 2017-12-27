import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YedekPage } from '../yedek/yedek';

/**
 * Generated class for the Yedek5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yedek5',
  templateUrl: 'yedek5.html',
})
export class Yedek5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Yedek5Page');
  }
  getToYedek() {
    this.navCtrl.push(YedekPage);
  }
}

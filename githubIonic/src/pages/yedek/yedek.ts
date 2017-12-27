import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Yedek1Page } from '../yedek1/yedek1';

/**
 * Generated class for the YedekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yedek',
  templateUrl: 'yedek.html',
})
export class YedekPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YedekPage');
  }
  getToYedek1() {
    this.navCtrl.push(Yedek1Page);
  }

}

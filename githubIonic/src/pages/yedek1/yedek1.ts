import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YedekPage } from '../yedek/yedek';
import { Yedek2Page } from '../yedek2/yedek2';
/**
 * Generated class for the Yedek1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yedek1',
  templateUrl: 'yedek1.html',
})
export class Yedek1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Yedek1Page');
  }
  getToYedek() {
    this.navCtrl.push(YedekPage);
  }
  getToYedek2() {
    this.navCtrl.push(Yedek2Page);
  }

}

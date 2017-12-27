import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YedekPage } from '../yedek/yedek';
import { Yedek3Page } from '../yedek3/yedek3';
/**
 * Generated class for the Yedek2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yedek2',
  templateUrl: 'yedek2.html',
})
export class Yedek2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Yedek2Page');
  }
  getToYedek() {
    this.navCtrl.push(YedekPage);
  }
  getToYedek3() {
    this.navCtrl.push(Yedek3Page);
  }

}

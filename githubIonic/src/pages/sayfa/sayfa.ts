import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Yedek5Page } from '../yedek5/yedek5';
import { YedekPage } from '../yedek/yedek';

/**
 * Generated class for the Yedek4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sayfa',
  templateUrl: 'sayfa.html',
})
export class SayfaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SayfaPage');
  }
  goToYedek5() {
   this.navCtrl.push(Yedek5Page);
  }
  goToYedek() {
    this.navCtrl.push(YedekPage);
   }

}

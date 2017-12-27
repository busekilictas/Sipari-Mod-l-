import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YedekPage } from '../yedek/yedek';
import { SayfaPage } from '../sayfa/sayfa';
/**

 * Generated class for the Yedek3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yedek3',
  templateUrl: 'yedek3.html',
})
export class Yedek3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Yedek3Page');
  }
  getToYedek() {
    this.navCtrl.push(YedekPage);
  }
  getToSayfa() {
    this.navCtrl.push(SayfaPage);
  }
}

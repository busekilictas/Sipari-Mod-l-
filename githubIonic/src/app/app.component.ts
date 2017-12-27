import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { YedekPage } from '../pages/yedek/yedek';
import { Yedek1Page } from '../pages/yedek1/yedek1';
import { SayfaPage } from '../pages/sayfa/sayfa';
import { Yedek2Page } from '../pages/yedek2/yedek2';
import { Yedek3Page } from '../pages/yedek3/yedek3';
import { Yedek5Page } from '../pages/yedek5/yedek5';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = YedekPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'yedek', component: YedekPage },
      { title: 'sayfa', component: SayfaPage },
      { title: 'yedek1', component: Yedek1Page },
      { title: 'yedek2', component: Yedek2Page },
      { title: 'yedek3', component: Yedek3Page },
      { title: 'yedek5', component: Yedek5Page }
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

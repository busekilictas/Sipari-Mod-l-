import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Http } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsersProvider } from '../providers/github-users/github-users';
import { HttpModule } from '@angular/http';
import { YedekPage } from '../pages/yedek/yedek';
import { Yedek1Page } from '../pages/yedek1/yedek1';
import { Yedek2Page } from '../pages/yedek2/yedek2';
import { Yedek3Page } from '../pages/yedek3/yedek3';
import { Yedek5Page } from '../pages/yedek5/yedek5';
import { SayfaPage } from '../pages/sayfa/sayfa';


@NgModule({
  declarations: [
    MyApp,
    YedekPage,
    Yedek1Page,
    Yedek2Page,
    Yedek3Page,
    SayfaPage,
    Yedek5Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YedekPage,
    Yedek1Page,
    Yedek2Page,
    Yedek3Page,
    SayfaPage,
    Yedek5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider
  ]
})
export class AppModule {}

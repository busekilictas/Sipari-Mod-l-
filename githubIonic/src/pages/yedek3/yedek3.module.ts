import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Yedek3Page } from './yedek3';
import { YedekPage } from '../yedek/yedek';
import { SayfaPage } from '../sayfa/sayfa';

@NgModule({
  declarations: [
    Yedek3Page,
    YedekPage,
    SayfaPage

  ],
  imports: [
    IonicPageModule.forChild(Yedek3Page),
  ],
})
export class Yedek3PageModule {}

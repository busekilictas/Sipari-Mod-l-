import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Yedek2Page } from './yedek2';
import { Yedek3Page } from '../yedek3/yedek3';
import { YedekPage } from '../yedek/yedek';

@NgModule({
  declarations: [
    Yedek2Page,
    Yedek3Page,
    YedekPage
  ],
  imports: [
    IonicPageModule.forChild(Yedek2Page),
  ],
})
export class Yedek2PageModule {}

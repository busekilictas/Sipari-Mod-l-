import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Yedek1Page } from './yedek1';
import { YedekPage } from '../yedek/yedek';
import { Yedek2Page } from '../yedek2/yedek2';

@NgModule({
  declarations: [
    Yedek1Page,
    YedekPage,
    Yedek2Page
  ],
  imports: [
    IonicPageModule.forChild(Yedek1Page),
  ],
})
export class Yedek1PageModule {}

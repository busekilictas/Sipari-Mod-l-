import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YedekPage } from './yedek';
import { Yedek1Page } from '../yedek1/yedek1';

@NgModule({
  declarations: [
    YedekPage,
    Yedek1Page
  ],
  imports: [
    IonicPageModule.forChild(YedekPage),
  ],
})
export class YedekPageModule {}

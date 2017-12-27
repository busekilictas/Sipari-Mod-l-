import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Yedek5Page } from './yedek5';
import { YedekPage } from '../yedek/yedek';

@NgModule({
  declarations: [
    Yedek5Page,
    YedekPage
  ],
  imports: [
    IonicPageModule.forChild(Yedek5Page),
  ],
})
export class Yedek5PageModule {}

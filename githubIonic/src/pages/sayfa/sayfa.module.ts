import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SayfaPage } from './sayfa';
import { Yedek5Page } from '../yedek5/yedek5';
import { YedekPage } from '../yedek/yedek';

@NgModule({
  declarations: [
    SayfaPage,
    Yedek5Page,
    YedekPage
  ],
  imports: [
    IonicPageModule.forChild(SayfaPage),
  ],
})
export class SayfaPageModule {}

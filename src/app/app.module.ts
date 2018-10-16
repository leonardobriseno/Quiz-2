import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TvPage } from '../pages/tv/tv';
import { BocinaPage } from '../pages/bocina/bocina';
import { LamparaPage } from '../pages/lampara/lampara';
import { SmartphonePage } from '../pages/smartphone/smartphone';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TvPage,
    BocinaPage,
    LamparaPage,
    SmartphonePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TvPage,
    BocinaPage,
    LamparaPage,
    SmartphonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

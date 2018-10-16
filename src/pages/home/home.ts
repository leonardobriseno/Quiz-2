import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocina = BocinaPage;
  lampara = LamparaPage;
  tv = TvPage;
  smartphone = SmartphonePage;

  constructor(public navCtrl: NavController) {

  }
  clickbocina(){
    this.navCtrl.push(this.bocina)
  }
  clicktv()){
    this.navCtrl.push(this.tv)
  }
  clicklampara(){
    this.navCtrl.push(this.lampara)
  }
  clicksmartphone(){
    this.navCtrl.push(this.smartphone)
  }

}

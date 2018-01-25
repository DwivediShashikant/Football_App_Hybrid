import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from '../pages/pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MyTeamsPage;
  @ViewChild(Nav) nav: Nav;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then( ()=> {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}


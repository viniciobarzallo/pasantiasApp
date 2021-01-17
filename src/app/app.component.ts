import { Component } from '@angular/core';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { StorageService } from './servicios/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  id:number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    public storage:StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
      this.id=this.storage.listarL();
      console.log("id "+this.id)

      if (this.id>0) {
        this.router.navigateByUrl(''), {
          queryParams:{
            id:1
          }
        }
      }else{
      this.router.navigateByUrl('login')
    }

    });
  }
}

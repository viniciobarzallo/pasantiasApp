import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(1);
  
  constructor(
    private routeLogin: Router,
    private popoverCtrl: PopoverController
    ) {
    
  }

  ngOnInit() {
    console.log(this.items)
  }

  onClick( valor: number ){
    console.log('item:', valor);
    this.popoverCtrl.dismiss({
      item: valor
    });

  }

  cerrarSesion(){
    this.routeLogin.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popnuevains',
  templateUrl: './popnuevains.component.html',
  styleUrls: ['./popnuevains.component.scss'],
})
export class PopnuevainsComponent implements OnInit {

  items = Array(1);

  constructor(
    private routeLogin: Router,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  onClick( valor: number ){
    console.log('item:', valor);
    this.popoverCtrl.dismiss({
      item: valor
    });

  }

  nuevaInstalacion(){
    this.routeLogin.navigate(['/nuevains']);
  }

}

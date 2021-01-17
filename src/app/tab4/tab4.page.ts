import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../componentes/popinfo/popinfo.component';
import { StorageService } from '../servicios/storage.service';
import { Empleado } from '../tab2/empleado';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user1 = {
    id: 0,
    cedula: '',
    nombre: '',
    celular: '',
    email: '',
    password: '',
    departamento: '',
    registro: [],
    instalacion: []
  }

  user:Empleado;
  datos:any=[];

  constructor(
    public popoverCtrl: PopoverController,public storage:StorageService) { 
     
    }

  ngOnInit() {
    this.user1=this.storage.listarE();
    if (this.user1!=null) {
     console.log("user1 "+ this.user1.nombre);
    }else
    console.log("vacio")
  }

  async mostrarPop( evento ){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      
    });
    console.log("cerrar sesion");
    this.storage.limpiar();
    await popover.present();
    //popover.onDidDismiss(); despues de cerrar
    //popover.onWillDismiss(); justo antes de cerrar
    const { data } = await popover.onWillDismiss();
    console.log('Padre:', data);
 }


}

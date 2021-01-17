import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RadioService } from '../servicios/radio.service';
import { StorageService } from '../servicios/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../tab2/empleado';
import { Cliente } from '../tab2/cliente';
import { Antena } from '../tab2/antena';
import { Agendamiento } from '../tab2/agendamiento';
import { Registro } from '../tab2/registro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  disablePin: boolean = false;
  color1:string;

  user = {
    id: 0,
    fechaHora: '',
    observaciones: '',
    problema: '',
    accion:'',
    //empleado: {},
   cliente: {}
    //agendamiento: {}
  }

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
  checkbox={};
  color='#FFFFFF';
  id=0;
  id1=0;
  nombre=null;
  apellido=null;
  lat1=0;
  lng1=0;
   clientes1: Registro[] = [];
   //clientes: Cliente;
   clientes: Agendamiento[] = [];
   check:any;
  aux:boolean;
  datos:any=[];
  visita:Agendamiento;

  deshabilitarTexto=false;

  constructor(private router: Router, private route: ActivatedRoute, public httpCliente:HttpClient, private service: RadioService,  public storage:StorageService) {
    this.lista();
    this.clientes1.forEach(id => this.checkbox[this.user.id]=true);
   
      
  }
  ngOnInit(){
    
    this.route.queryParams
     .subscribe(params => {
        params.id
        this.service.buscarV(params.id).subscribe(response => {
          this.user=response;
          this.id1=this.user.id;
          console.log("user.id "+this.user.id);
        })
     });
     this.textoEnable();
     
   } 

   textoDisable() {
    console.log("deshabilitad "+this.deshabilitarTexto)
    this.deshabilitarTexto = true;
  }

  textoEnable() {
    console.log(this.deshabilitarTexto)
    this.deshabilitarTexto = false;
  }

  //lista todas las visitas tecnicas de un tecnico
  public lista(){
    this.user1=this.storage.listarE();
     console.log("usuario nombre "+this.user1.nombre);
    this.service.todasVs(this.user1.nombre).subscribe(response => {
      this.clientes = response;
      console.log("visitas"+this.clientes)
    },(error) => {
      console.log(error);
      
    });
   }

   //nos redirigimos al cliente de una especifica visita tecnica
   actualizar(id: number) {
    //this.navCtrl.push("Tab5Page");
    console.log("Hola")
    this.router.navigate(['/visita'], {
      queryParams:{
        
        id
      }
      
    });
    console.log("funciona visita");
  }
     //nos permite guardar en agendamiento un true para decir que ya hemos realizado esa actividad  
  cambiar(event, char){
    this.visita=char;
    console.log("actualizar", this.visita);
    this.service.actualizarVisita(this.visita).subscribe(response => {
      console.log(response);
      
    });
    this.textoDisable();
  }
}
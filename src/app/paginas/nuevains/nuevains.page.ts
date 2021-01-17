import { Component, OnDestroy, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import { Network, NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core'
import { Cliente } from 'src/app/tab2/cliente';
import { RadioService } from 'src/app/servicios/radio.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { Servicio } from 'src/app/tab2/servicio';
import { Antena } from 'src/app/tab2/antena';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-nuevains',
  templateUrl: './nuevains.page.html',
  styleUrls: ['./nuevains.page.scss'],
})
export class NuevainsPage implements OnInit, OnDestroy {

  
  public validador; 
  public valido;
  public email;
  public nombre;
  public teclado_especial=false;
 
  form: FormGroup;

  cliente:Cliente = new Cliente();
  servicio:Servicio=new Servicio();
  
  servicios: Servicio[] = [];
  antenas: Antena[] = [];
  antena: Antena ;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle
  numcontrato:string;
  observaciones:string;
  ip:string;
  password:string;
  plan: string;

    //Variables para obtener coordenas del cliente
    latitud:string;
    longitud:string;
    
    //Variables para obtener mi ubicacion
    latitudMiubicacion:number;
    longitudMiubicacion:number;
  
    //Variables del cliente para abrir en google maps
    latitudmaps:number;
    longitudmaps:number;



  constructor(  
    private geolocation: Geolocation,
    private launchNavigator: LaunchNavigator,
    private service: RadioService,
    public storage:StorageService,
    private router: Router,
    public toastController: ToastController


  ) {
     this.service.ListarAnt().subscribe(res =>{
      this.antenas=res;      
      console.log(this.antenas, "ANTENAS");
    });

     
   }

  ngOnInit() {
   
    this.form = new FormGroup({
      cedula: new FormControl(this.cliente.cedula,[Validators.required]),
      nombres: new FormControl(this.cliente.nombre,[Validators.pattern(/^[A-Za-z ]+$/), Validators.required]),
      apellidos: new FormControl(this.cliente.apellido,[Validators.pattern(/^[A-Za-z ]+$/), Validators.required]),
      email: new FormControl(this.cliente.email),
      // convencional: new FormControl(this.cliente.convencional, [Validators.required]),
      // celular: new FormControl(this.cliente.celular, [Validators.required]),
      principal: new FormControl(this.cliente.direccionPrincipal, [Validators.required]),
      secundaria: new FormControl(),
      referencia: new FormControl(this.cliente.direccionReferencia, [Validators.required]),
      contrato: new FormControl( ),
      //plan: new FormControl( ),
      //ip: new FormControl( ),
     // antena: new FormControl(),
     // password: new FormControl(),
      observacion: new FormControl()
    });
  }
  ngOnDestroy(): void{
    //this.networkListener.remove();
  }

  //elegir la antena que se usa
  detect(evt){
    
    let pos = this.antenas.findIndex(({ id }) => id >=  evt.detail.value);
    this.antena = this.antenas[pos];
    console.log("Cambio", evt.detail.value, pos, this.antenas[pos]);
    
  }
//elegir plan que se usa
  detect1(evt){
    
    
    console.log(evt.detail.value);
    this.plan = (evt.detail.value);
    this.servicio.plan = this.plan;
    
  }
  isConnected = false;
  id:number;

   client:any;
   lista_array=[];


 
//crear al nueo cliente si hay conexion
//si no hay se guarda en un localstorage y cuando haiga
// conexion se guarda en la base
  async crear() {

    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Cambió estado de la red', status);
      this.networkStatus=status;
      
    },
    );
    this.networkStatus = await Network.getStatus();
    const aux=String (this.networkStatus.connected);
    
    if( aux=="true") {
      console.log("Si funciona esto "+this.networkStatus.connected);
     // this.cliente.servicio=this.servicio;
     this.servicios.push(this.servicio);
     this.cliente.servicio = this.servicios;
     //this.cliente.antena = this.antena;
     
     console.log(this.cliente, "Fuera de post");
     
      this.service.crear(this.cliente).subscribe(res =>{
          this.router.navigate(['/tabs'], {queryParams: {
          id: this.cliente.id
        }});
            console.log(res);
          });

          let mensaje='';
        mensaje='Datos Guardados';
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'bottom',
        color:'success',
        duration: 2000
      });
      toast.present();

    }else if( aux=="false") {
      console.log("No funciona esto "+this.networkStatus.connected)
      this.storage.almacenar(this.cliente);
      console.log(" storage "+this.storage.listar());

      let mensaje='';
        mensaje='Datos se guardaran cuando haiga internet';
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'middle',
        color:'danger',
        duration: 2000
      });
      toast.present();
    }
   console.log("id "+this.id);
    
  }

  listar(){
    console.log("Listado")
   console.log(this.storage.listar());
  }
  
  limpiar(){
    this.storage.limpiar();
    console.log('LocalStorage Vacio');
  }
//obtiene las coordenadas del lugar que estamos en ese momento
  obtenerGeolocalizacion(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.latitud = String(geoposition.coords.latitude);
      this.longitud = String(geoposition.coords.longitude);
      console.log(this.latitud)
      console.log(this.longitud)
      this.cliente.latitud = this.latitud;
      this.cliente.longitud = this.longitud;

    }); 
  }

  //refrescamos la localizacion 
  doRefresh(event){
    setTimeout(() => {
      this.obtenerGeolocalizacion();
      event.target.complete();
    },1500);
  }

//mostramos la ubicacion actual del tecnico
  miUbicacion(){
    this.geolocation.getCurrentPosition().then(position => {
      this.latitudMiubicacion = position.coords.latitude;
      this.longitudMiubicacion = position.coords.longitude;
      console.log('miubicacion:', this.latitudMiubicacion);
      console.log('miubicacion:', this.longitudMiubicacion);
    },error=>{
      console.log('error', error);
    });
  }

  
  navegarMapas(){
    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS,
      start:[this.latitudMiubicacion, this.longitudMiubicacion]
      
    };
    this.launchNavigator.navigate('Cuenca, EC',options)
    //this.launchNavigator.navigate([this.latitudmaps, this.longitudmaps],options)
    .then(success =>{
      console.log(success);
    },error=>{
      console.log(error);
    })
    //console.log('mapas', this.latitudmaps);
    //console.log('mapas', this.longitudmaps);

  }

//metodo validador de la cedula
  async validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;
    let mensaje='';
    if (cedula.length == 10)
    {    
        let tercerDigito = parseInt(cedula.substring(2, 3));
        if (tercerDigito < 6) {
        
            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
          //      console.log(suma+" suma"+coefValCedula[i]); 
            }
            
            suma= Math.round(suma);
          
          //  console.log(verificador);
          //  console.log(suma);
          //  console.log(digito);
  
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
            } else {
              mensaje='Cedula Incorrecta';
                cedulaCorrecta = false;
                
            }
        } else {
          mensaje='Cedula Incorrecta';
            cedulaCorrecta = false;
        }
    } else {
      mensaje='Cedula Incorrecta';
        cedulaCorrecta = false;
    }
   this.validador= cedulaCorrecta;
   console.log("validador "+this.validador);
   if (!this.validador) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'middle',
      color:'danger',
      duration: 2000
    });
    toast.present();
   }
  

    
  }
// llamaría validateIp a una función que valide directamente la ip que se pasa
validateIp(ip) {
  let patronIp = new RegExp("^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$");
  let valores;

  // regresaria return si la ip no tiene el formato correcto.
  if(ip.search(patronIp) !== 0) {
    return false
  }

  valores = ip.split("."); 

  
  return valores[0] <= 255 && valores[1] <= 255 && valores[2] <= 255 && valores[3] <= 255 && valores[3] != 0  && valores[3] != 1 && valores[3] != 255
}
//validamos la ip desde el html
async validateForm(idForm) {
  let object = document.getElementById(idForm);
  let mensaje='';
  console.log("idform "+idForm);
  //let valueForm = (<HTMLInputElement>object).value; // generamos un array de valores separado por el salto de linea
  let isValid = (this.validateIp(idForm)) // validamos que todos los elementos cumplan con la condición dada en validateIp
  this.valido=isValid;
  console.log("isvalid "+isValid);
  if (isValid) {
    //object.style.color = "#000"; 
    console.log("valido "+isValid);
    //return; 
  }else{
  console.log("no es valido "+isValid);
  mensaje='IP no valida';
  const toast = await this.toastController.create({
    message: mensaje,
    position: 'middle',
    color:'danger',
    duration: 2000
  });
  toast.present();
  }
  
}

//metodo para validar la cedula
async esEmailValido(email: string) {
  let mailValido = false;
    'use strict';
let mensaje='';
    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.match(EMAIL_REGEX)){
      mailValido = true;
      this.email=mailValido;
      console.log("email "+email.match(EMAIL_REGEX));
    }else{
      mensaje='Email no valido';
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'middle',
        color:'danger',
        duration: 2000
      });
      toast.present();

      this.email=false;
    }
  return mailValido;
}

}
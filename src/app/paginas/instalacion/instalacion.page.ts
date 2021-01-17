import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';
import { PopnuevainsComponent } from 'src/app/componentes/popnuevains/popnuevains.component';
import { RadioService } from 'src/app/servicios/radio.service';
//import { AlmacenamientoService } from '../../servicios/almacenamiento.service';



@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.page.html',
  styleUrls: ['./instalacion.page.scss'],
})
export class InstalacionPage implements OnInit {

  latitud:number;
  longitud:number;
  clienteInstalacion:any=[];
  deshabilitarTexto=false;

  user = {
    id : 0,
    //tipoServicio: "",
    nombre: "",
    direccion: "",
    telefono: "",
    coordenadas: "",
    observaciones: "",
   // tecnico: "",
    empleado: {},
    
  }

  constructor(
    private obtenerUrl:ActivatedRoute,
    private httpCliente:HttpClient,
    private geolocation:Geolocation,
    public popoverCtrol: PopoverController,
    private router: Router,
    private service: RadioService,
    private route: ActivatedRoute
    //private almacenamiento:AlmacenamientoService
    ) { 

     
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
       params.id
       this.service.buscarI(params.id).subscribe(response => {
         this.user=response;
         
       })
    });
    this.textoDisable();
  }

  textoDisable() {
    console.log(this.deshabilitarTexto)
    this.deshabilitarTexto = !this.deshabilitarTexto;
  }

  textoEnable() {
    console.log(this.deshabilitarTexto)
    this.deshabilitarTexto = false;
  }

  obtenerGeolocalizacion(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.latitud = geoposition.coords.latitude;
      this.longitud = geoposition.coords.longitude;
      console.log(this.latitud)
      console.log(this.longitud)

    }); 
  }

  doRefresh(event){
    setTimeout(() => {
      this.obtenerGeolocalizacion();
      event.target.complete();
    },1500);
  }

  async mostrarPop( evento ){
    const popover = await this.popoverCtrol.create({
      component: PopnuevainsComponent,
      event: evento,
      mode: 'ios',
      
    });
    await popover.present();
    //popover.onDidDismiss(); despues de cerrar
    //popover.onWillDismiss(); justo antes de cerrar
    const { data } = await popover.onWillDismiss();
    console.log('Padre:', data);
 }


  //esta es la variable de validación
  public validador; 
  validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;
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
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
    } else {
        cedulaCorrecta = false;
    }
  this.validador= cedulaCorrecta;

  }

}

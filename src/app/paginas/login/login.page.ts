import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RadioService } from 'src/app/servicios/radio.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { Antena } from 'src/app/tab2/antena';
import { Cliente } from 'src/app/tab2/cliente';
import { Empleado } from 'src/app/tab2/empleado';

const { Network } = Plugins;
var aux:string;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  idUser=0;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  isConnected = false;
  cli:any;
  user1 = {
    id : 0,
    cedula: "",
    nombre: "",
    email: "",
    convencional: "",
    celular: "",
    direccionPrincipal: "",
    direccionSecundaria: "",
    direccionReferencia: "",
    latitud: "",
    longitud: "",
    servicio: [],
    antena: {}
  }
  
 
  cliente1:Empleado = new Empleado();
 empleado:Empleado;
  user:Cliente;
  myFormulario: FormGroup;
  emp:Empleado;

  constructor(private router: Router,private route: ActivatedRoute, private formBuilder: FormBuilder, public storage:StorageService, private service: RadioService, private toast: ToastController, private loading: LoadingController) {

    this.myFormulario = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]))
    });
   }

  ngOnInit() {
    this.listar();
    this.guardar();
    console.log("listar empleado" +this.storage.listarE());   

    
  }


  menu(){
    console.log("hiciste click")
    this.router.navigate(['/tabs']);
  }


  listar(){
    console.log("Listado Tabs")
   console.log("lista ffff "+this.storage.listar());
  }
//verifica si existe almacenado informacin en el localstorage y lo guarda en la base de datos
  async guardar(){
    console.log(this.storage.listar())
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Cambió estado de la red', status);
      this.networkStatus=status;
      
    },
    );
    this.networkStatus = await Network.getStatus();
    aux=String (this.networkStatus.connected);

    if( aux=="true") {
        if (this.storage.listar()!=null) {
          this.user1=this.storage.listar();
          console.log("Si funciona " + this.user1.id+" listar "+this.storage.listar())
          this.service.crear(this.user).subscribe(res =>{
            this.storage.limpiar();
            console.log(res);
          });
        }else{
          console.log("Esta Vacio")
        }
      }
  }

  // metodo para loguearse
  login() {
    this.service.login(this.cliente1).subscribe(response => {
      this.empleado=response;
      this.idUser = response.id;
          
      console.log("iduser "+this.idUser );
      this.storage.almacenarE(this.empleado);
      
      if(this.idUser > 0) {
       
      this.emp= this.storage.listarE();
        console.log("empleado 1234 "+this.emp.nombre);        

        this.storage.almacenarL(this.idUser)
        
        //this.router.navigate(['/tabs']);
        this.router.navigate(['/tabs'], {queryParams: {
          id: this.idUser
          
        }});
      } else if( this.idUser == 0) {
        this.mensaje('Datos Incorrecto');
        console.log("Datos Incorrectos");
      }
    });

  }

  async mensaje(msj: string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 1500
    });
    toast.present();
  }

  async iniciar() {
    const l = await this.loading.create({
      message: 'Espera...',
      duration: 1500,
      translucent: true
    });
    l.present();
    this.login()
    console.log(" login "+this.login.name);
    const { role, data } = await l.onDidDismiss();
    
  }
  

  
}
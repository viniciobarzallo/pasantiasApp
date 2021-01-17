import { Servicio } from './servicio';
import { Telefono } from './telefono';
import { DatoServicio } from './datoServicio';
import { Registro } from './registro';
import { Antena } from './antena';


export class Cliente {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    email: string;
    //convencional:string;
    //celular:string;
    direccionPrincipal: string;
    direccionSecundaria: string;
    direccionReferencia: string;
    latitud: string;
    longitud: string;
    servicio: Servicio[];
    //registro:Registro[];
   //datoServicio:DatoServicio[];
    //antena:  Antena;
   //telefono:Telefono[];
     
 }
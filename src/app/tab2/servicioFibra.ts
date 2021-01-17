import { Servicio } from './servicio';
import { Telefono } from './telefono';
import { DatoServicio } from './datoServicio';
//import { Registro } from './reistro';

export class ServicioFibra {
    id: number;
    olt: string;
    nap: string;
    hilo: string;
    interface: string;
    ont: string;
    port: string;
    vlan: string;
    usrvlan: string;
    potencia: string;
    tecnicoActiva: string;
    tecCampoActiva: string;
    mirDrop: string;
    confiONT: string;
    confSrvPort: string;
    confiONTPort: string;
    servicio: Servicio[];
    //registro:Registro[];
   //datoServicio:DatoServicio[];
   // antena:  Antena;
   telefono:Telefono[];
     
 }
import { DatoServicio } from './datoServicio';
import {   PPPOE }   from './pppoe';
import {   VLAN }   from './vlan';

export class TipoActivacion {
    id: number;
   nombre: string;
    pppoe: PPPOE[];
    vlan: VLAN[];
    datoServicio:DatoServicio;
}
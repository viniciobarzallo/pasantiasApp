import { DatoServicio } from './datoServicio';


export class Fibra {
    id: number;
    olt: string;
    nap: string;
    hilo: number;
    interface: string;
    ont: string;
    port: number;
    vlan: string;
    usrvlan: string;
    potencia: number;
    tecnicoActiva: string;
    tecCampoActiva: string;
    mtrDrop: number;
    confiONT: string;
    confiSrvPort: string;
    ConfiONTPort: string;
    datoServicio: DatoServicio;
}
import { Radio } from './radio';
import { Fibra } from './fibra';
import { Cliente } from './cliente';

export class DatoServicio {
    id: number;
    equipo:string;
    serial:string;
    numeroContrato: string;
    fechaContrato: string;
    plan: string;
    ip: string;
    passwordEquipo: string;
    passwordRouter:string;
    routerVendido:string;
    observaciones: string;
    cliente: Cliente;
    radio:Radio[];
    fibra:Fibra[];
}
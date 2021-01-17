import { Registro } from './registro';
import { Instalacion } from './instalacion';

export class Empleado {
    id: number;
    cedula: string;
    nombre: string;
    email: string;
    celular: string;
    password: string;
    departamento: string;
    registro: Registro[];
    instalacion: Instalacion[];
    
  
 }
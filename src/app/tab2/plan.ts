import { Servicio } from './servicio';

export class Plan {
    id: number;
    tipoPlan: string;
    capacidad: string;
    tipoServicio: string;
    servicio: Servicio[];
}
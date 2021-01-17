import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Empleado } from '../tab2/empleado';
import { Cliente } from '../tab2/cliente';
import { Instalacion } from '../tab2/instalacion';
import { Antena } from '../tab2/antena';
import { Agendamiento } from '../tab2/agendamiento';
import { Registro } from '../tab2/registro';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
        private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        constructor(private http: HttpClient) { }
       //webservices para listar los registros
        todasV():Observable <Registro[]> {
          return this.http.get<Registro[]>('http://35.184.60.118:8080/CallCenter/srv/astronet/listRgVT');
          // return this.http.get<Registro[]>('http://35.222.54.60:8080/CallCenter/srv/astronet/listRgVT');
        //  return this.http.get<Registro[]>('http://localhost:8080/CallCenter/srv/astronet/listRgVT');
        }

        //Webservices para listar las instalaciones
        todasI():Observable <Instalacion[]> {
          return this.http.get<Instalacion[]>('http://35.184.60.118:8080/CallCenter/srv/astronet/listInst');
          // return this.http.get<Instalacion[]>('http://35.222.54.60:8080/CallCenter/srv/astronet/listInst');
          // return this.http.get<Instalacion[]>('http://localhost:8080/CallCenter/srv/astronet/listInst');
        }

          //webservices para listar las visitas tecnicas de cada tecnico
        todasVs(nombre: string):Observable <Agendamiento[]> {
          return this.http.get<Agendamiento[]>(`http://35.184.60.118:8080/CallCenter/srv/astronet/listAG?nombre=${nombre}`);
          // return this.http.get<Agendamiento[]>(`http://35.222.54.60:8080/CallCenter/srv/astronet/listAG?nombre=${nombre}`);
          // return this.http.get<Agendamiento[]>(`http://localhost:8080/CallCenter/srv/astronet/listAG?nombre=${nombre}`);
        }

        //listar todas las instalaciones de cada tecnico
        todasIs(nombre: string):Observable <Instalacion[]> {
          return this.http.get<Instalacion[]>(`http://35.184.60.118:8080/CallCenter/srv/astronet/listIns?nombre=${nombre}`);
          // return this.http.get<Instalacion[]>(`http://35.222.54.60:8080/CallCenter/srv/astronet/listIns?nombre=${nombre}`);
          // return this.http.get<Instalacion[]>(`http://localhost:8080/CallCenter/srv/astronet/listIns?nombre=${nombre}`);
        }

        //Listar las antenas
        ListarAnt():Observable <Antena[]> {
           return this.http.get<Antena[]>('http://35.184.60.118:8080/CallCenter/srv/astronet/listarAn');
          //  return this.http.get<Antena[]>('http://35.222.54.60:8080/CallCenter/srv/astronet/listarAn');
          // return this.http.get<Antena[]>('http://localhost:8080/CallCenter/srv/astronet/listarAn');
        }

        //Crear un nuevo clinete desde la instalacion del servicio
        crear(cliente: Cliente): Observable<Response> {
          return this.http.post<Response>('http://35.184.60.118:8080/CallCenter/srv/astronet/create', cliente, {headers: this.httpHeaders});
          // return this.http.post<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/create', cliente, {headers: this.httpHeaders});
          //  return this.http.post<Response>('http://localhost:8080/CallCenter/srv/astronet/create', cliente, {headers: this.httpHeaders});
      }

      //actualizar los datos del cliente desde la visita tecnica
      actualizar1(cliente: any): Observable<Response> {
      console.log("cliente actualizar "+cliente)
      return this.http.put<Response>('http://35.184.60.118:8080/CallCenter/srv/astronet/actualizarCl',cliente);
        // return this.http.put<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/actualizarCl',cliente);
        // return this.http.put<Response>('http://localhost:8080/CallCenter/srv/astronet/actualizarCl',cliente);
  }

  //actualizar la visita tecnica
    actualizarVisita(agendamiento: Agendamiento): Observable<Response> {
      console.log("Registro actualizado " + agendamiento)
      return this.http.put<Response>('http://35.184.60.118:8080/CallCenter/srv/astronet/actualizarVisita',agendamiento);
      // return this.http.put<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/actualizarVisita',agendamiento);
      //  return this.http.put<Response>('http://localhost:8080/CallCenter/srv/astronet/actualizarVisita', agendamiento);
    }

    //actualizar la instalaciion
    actualizarInstalacion(instalacion: Instalacion): Observable<Response> {
      console.log("Instalacion actualizada " + instalacion)
      return this.http.put<Response>('http://35.184.60.118:8080/CallCenter/srv/astronet/actualizarInstalacion',instalacion);
      // return this.http.put<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/actualizarInstalacion',instalacion);
      //  return this.http.put<Response>('http://localhost:8080/CallCenter/srv/astronet/actualizarInstalacion', instalacion);
    }

    //buscar una visita tecnica
    buscarV(id:number):Observable <Registro> {
      console.log("id service service "+id);
       return this.http.get<Registro>(`http://35.184.60.118:8080/CallCenter/srv/astronet/buscarIdVis?id=${id}`);
      //  return this.http.get<Registro>(`http://35.222.54.60:8080/CallCenter/srv/astronet/buscarIdVis?id=${id}`);
      // return this.http.get<Registro>(`http://localhost:8080/CallCenter/srv/astronet/buscarIdVis?id=${id}`);
    }

    //buscar una instalacion
    buscarI(id:number):Observable <Instalacion> {
      
      return this.http.get<Instalacion>(`http://35.184.60.118:8080/CallCenter/srv/astronet/buscarInsId?id=${id}`);
      // return this.http.get<Instalacion>(`http://35.222.54.60:8080/CallCenter/srv/astronet/buscarInsId?id=${id}`);
      // return this.http.get<Instalacion>(`http://localhost:8080/CallCenter/srv/astronet/buscarInsId?id=${id}`);
    }

  //login para la app movil
    login(cliente: Empleado): Observable<Empleado> {
      
       return this.http.post<Empleado>('http://35.184.60.118:8080/CallCenter/srv/astronet/login', cliente, {headers: this.httpHeaders});
      //  return this.http.post<Empleado>('http://35.222.54.60:8080/CallCenter/srv/astronet/login', cliente, {headers: this.httpHeaders});
      // return this.http.post<Empleado>('http://localhost:8080/CallCenter/srv/astronet/login', cliente, {headers: this.httpHeaders});
    }
  }
  

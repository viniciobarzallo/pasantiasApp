import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Storage } from '@ionic/storage';
import { Cliente } from '../tab2/cliente';
import { Empleado } from '../tab2/empleado';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(public storage:Storage) {}

 public almacenar(cliente:Cliente){

  localStorage.setItem('cliente',JSON.stringify(cliente))
    console.log(cliente);
  }
  public listar(){
    try {
      return JSON.parse(localStorage.getItem('cliente'));
    } catch (e) {
      console.log(e);
    }
  }

  public almacenar1(check:String){

    localStorage.setItem('check',JSON.stringify(check))
      console.log(check);
    }
    public listar1(){
      try {
        return JSON.parse(localStorage.getItem('check'));
      } catch (e) {
        console.log(e);
      }
    }
    public almacenarL(login:number){

      localStorage.setItem('login',JSON.stringify(login))
        console.log(login);
      }
      public listarL(){
        try {
          return JSON.parse(localStorage.getItem('login'));
        } catch (e) {
          console.log(e);
        }
      }

  public limpiar(): void{
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error al limpiar el localstorage, e');
    }
   
  }

  public almacenarE(empleado:Empleado){

    localStorage.setItem('empleado',JSON.stringify(empleado))
      console.log(empleado);
    }
    public listarE(){
      try {
        return JSON.parse(localStorage.getItem('empleado'));
      } catch (e) {
        console.log(e);
      }
    }

}
import { Injectable } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {MiHttpService} from '../mi-http/mi-http.service';

@Injectable()
export class JugadorService {
  private url:string ='http://germanmoltoni.esy.es/';

  constructor(private http:MiHttpService) { }
  Crear(path:string,jugador:Jugador){
    this.http.Post(this.url+path,{usuario:jugador.usuario,sexo:jugador.sexo,mail:jugador.email,password:jugador.password}).subscribe(msg=>{console.log(msg)});
    
  }
  Login(path:string,data:{usuario:string,password:string}){
    return this.http.Post(this.url+path,data)
    
  }
}

import { Injectable } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {MiHttpService} from '../mi-http/mi-http.service';

@Injectable()
export class JugadorService {
  private url:string ='http://localhost/';

  constructor(private http:MiHttpService) { }
  Crear(path:string,jugador:Jugador){
    this.http.Post(this.url+path,{usuario:jugador.usuario,sexo:jugador.sexo,mail:jugador.email,password:jugador.password});
    
  }
  Login(path:string,data:{usuario:string,password:string}){
    return this.http.Post(this.url+path,data)
    
  }
}

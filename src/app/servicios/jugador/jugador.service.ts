import { Injectable } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {MiHttpService} from '../mi-http/mi-http.service';
import { Observable }     from 'rxjs/Observable'; 

@Injectable()
export class JugadorService {
  private url:string ='https://germanmoltoni.byethost12.com/';

  constructor(private http:MiHttpService) { }
  Crear(path:string,jugador:Jugador){
    let listaJugadores = localStorage['jugadores'];
    if(listaJugadores != null){
      listaJugadores = JSON.parse(listaJugadores);
      listaJugadores.push({usuario:jugador.usuario,mail:jugador.mail,sexo:jugador.sexo,password:jugador.password});
      localStorage['jugadores'] = JSON.stringify(listaJugadores);
    }
    else{
      listaJugadores = [];
      listaJugadores.push({usuario:jugador.usuario,mail:jugador.mail,sexo:jugador.sexo,password:jugador.password});
      localStorage['jugadores'] = JSON.stringify(listaJugadores);
    }
    return new Observable(obs => {
      obs.next('registrado')
    });
    //return this.http.Post(this.url+path,{usuario:jugador.usuario,sexo:jugador.sexo,mail:jugador.mail,password:jugador.password});
    
  }
  Login(path:string,data:{usuario:string,password:string}){
    let jugador:Jugador;
    let listaJugadores = localStorage['jugadores'];
    if(listaJugadores != null){
      listaJugadores = JSON.parse(listaJugadores);
      for(let i in listaJugadores){
        if(listaJugadores[i].usuario == data.usuario && listaJugadores[i].password ==  data.password){
          jugador = listaJugadores[i];
          jugador = new Jugador(jugador.usuario,jugador.mail,jugador.sexo);
          break;
        }
      }
    }
    
    return new Observable<{token:string,msg:string,jugador:Jugador}>(obs => {
      if(jugador != null)
        obs.next({jugador:jugador,token:'',msg:null})
      else
        obs.next({jugador:jugador,token:'',msg:'no se encuentra'})
    });
    //return this.http.Post(this.url+path,data)
    
  }
  TraerJugadores(path:string):Observable<Jugador[]>{
    return this.http.Get(this.url+path) as Observable<Jugador[]>;
  }
 
}

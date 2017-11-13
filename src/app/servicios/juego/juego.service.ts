import { Injectable } from '@angular/core';
import {MiHttpService} from '../mi-http/mi-http.service';
import { Observable }     from 'rxjs/Observable'; 
import {Jugador} from '../../clases/jugador';
import {Juego} from '../../clases/juego';

@Injectable()
export class JuegoService {
  constructor(private http:MiHttpService) { }
  Guardar(obj){
    let jugadas = localStorage['jugadas'];
    if(jugadas != null){
      jugadas = JSON.parse(jugadas);
    }
    else{
      jugadas = [];
    }
    jugadas.push(obj);
    localStorage['jugadas'] = JSON.stringify(jugadas);
    
  }
 /* GuardarJugada(path:string,juego:Juego){
    let jugadas = localStorage['jugadas'];
    if(jugadas != null){
      jugadas = JSON.parse(jugadas);
      let jugador  =
      jugadas.push();
      localStorage['jugadores'] = JSON.stringify(jugadas);
    }
    else{
      jugadas = [
        {usuario:'carlos_uno',mail:'carlos@salajuegos',sexo:'M',password:'123321123'},
        {usuario:'alejandro_dos',mail:'ale@salaprueba',sexo:'M',password:'222222222'},
        {usuario:'laura_tres',mail:'laura@hotmail.com',sexo:'F',password:'111111222'},
        {usuario:'Juan_cuatro',mail:'juan@test',sexo:'M',password:'123123123'},
      ];
      jugadas.push({usuario:jugador.usuario,mail:jugador.mail,sexo:jugador.sexo,password:jugador.password});
      localStorage['jugadores'] = JSON.stringify(jugadas);
    }
    return new Observable(obs => {
      obs.next('registrado')
    });
    //return this.http.Post(this.url+path,{usuario:jugador.usuario,sexo:jugador.sexo,mail:jugador.mail,password:jugador.password});
    
  }
  Login(path:string,data:{usuario:string,password:string}){
    return this.LoginLocal(data.usuario,data.password);
    //return this.http.Post(this.url+path,data)
    
  }
  TraerJugadores(path:string):Observable<Jugador[]>{
    return this.TraerJugadoresLocal();
    //return this.http.Get(this.url+path) as Observable<Jugador[]>;
  }
  LoginLocal(usuario:string,password:string){
    let jugador:Jugador;
    let jugadas = localStorage['jugadores'];
    if(jugadas != null){
      jugadas = JSON.parse(jugadas);
      for(let i in jugadas){
        if(jugadas[i].usuario == usuario && jugadas[i].password ==  password){
          jugador = jugadas[i];
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
  }
  TraerJugadoresLocal(){
    let jugador:Jugador;
    let jugadas = localStorage['jugadores'];
    if(jugadas != null){
      jugadas = JSON.parse(jugadas);
      return new Observable<Jugador[]>(obs => {
        if(jugadas != null)
          obs.next(jugadas)
      });
  }
}*/
}
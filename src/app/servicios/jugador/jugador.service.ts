import { Injectable } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {MiHttpService} from '../mi-http/mi-http.service';
import { Observable }     from 'rxjs/Observable'; 

@Injectable()
export class JugadorService {
  private url:string ='https://germanmoltoni.byethost12.com/';

  constructor(private http:MiHttpService) { }
  Crear(path:string,jugador:Jugador){
    return this.CrearJugador(jugador);
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
    let listaJugadores = localStorage['jugadores'];
    if(listaJugadores != null){
      listaJugadores = JSON.parse(listaJugadores);
      for(let i in listaJugadores){
        if(listaJugadores[i].usuario == usuario && listaJugadores[i].password ==  password){
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
        obs.next({jugador:jugador,token:'',msg:'No se encuentra el Jugador'})
    });
  }
  TraerJugadoresLocal(){
    let jugador:Jugador;
    let listaJugadores = localStorage['jugadores'];
    if(listaJugadores != null){
      listaJugadores = JSON.parse(listaJugadores);
      return new Observable<Jugador[]>(obs => {
        if(listaJugadores != null)
          obs.next(listaJugadores)
      });
  }
}
  CrearJugador(jugador:Jugador){
    let listaJugadores = localStorage['jugadores'];
    let jug = jugador.toObj();
    if(listaJugadores != null)
      listaJugadores = JSON.parse(listaJugadores);
    else{
      listaJugadores = [
        {usuario:'carlos_uno',mail:'carlos@salajuegos',sexo:'M',password:'123321123'},
        {usuario:'alejandro_dos',mail:'ale@salaprueba',sexo:'M',password:'222222222'},
        {usuario:'laura_tres',mail:'laura@hotmail.com',sexo:'F',password:'111111222'},
        {usuario:'Juan_cuatro',mail:'juan@test',sexo:'M',password:'123123123'},
      ];
    }
    for(let i in listaJugadores){
      if(listaJugadores[i].usuario == jugador.usuario || listaJugadores[i].mail ==  jugador.mail){
        jugador=null;
        break;
      }
    }
    listaJugadores.push(jug);
    localStorage['jugadores'] = JSON.stringify(listaJugadores);
    
    return new Observable<{jugador:Jugador,msg:string,token:string}>(obs => {
      if(jugador != null){
        jugador.password='';
        obs.next({jugador:jugador,token:'',msg:null})
        
      }
      else
        obs.next({jugador:jugador,token:'',msg:"El usuario o mail se encuentran registrados"})
    });
  }
}

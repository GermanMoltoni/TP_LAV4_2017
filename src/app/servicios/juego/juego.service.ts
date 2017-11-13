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
  TraerJugadas(path:string):Observable<Juego[]>{
    return this.TraerJugadasLocal();
    //return this.http.Get(this.url+path) as Observable<Jugador[]>;
  }
  /*Login(path:string,data:{usuario:string,password:string}){
    return this.LoginLocal(data.usuario,data.password);
    //return this.http.Post(this.url+path,data)
    
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
  }*/
  TraerJugadasLocal(){
    let jugadas = localStorage['jugadas'];
    if(jugadas != null){
      jugadas = JSON.parse(jugadas);
      return new Observable<any[]>(obs => {
        if(jugadas != null)
          obs.next(jugadas)
      });
  }
}
}
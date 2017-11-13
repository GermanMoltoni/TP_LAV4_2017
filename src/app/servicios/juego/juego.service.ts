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

  TraerJugadasLocal(){
    let jugadas = localStorage['jugadas'];
    if(jugadas != null){
      jugadas = JSON.parse(jugadas);
      return new Observable<any[]>(obs => {
        if(jugadas != null)
        console.log(jugadas)
          obs.next(jugadas)
      });
  }
}
}
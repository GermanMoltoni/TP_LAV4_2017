import { Injectable } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {JugadorService} from '../jugador/jugador.service';
import { Observable }     from 'rxjs/Observable'; 

@Injectable()
export class FiltradoJugadoresService {

  constructor(public jugador:JugadorService) { }
  public Filtrar(filtro:string,ruta:string):Observable<Jugador[]>{
    let jugadores;
    switch(filtro){
      case "ganadores":
   //     jugadores= this.jugador.TraerJugadores(ruta).map(data=>data.filter(jugador => jugador.gano == true)) ;
      break;
      case"perdedores":
   //     jugadores=this.jugador.TraerJugadores(ruta).map(data=>data.filter(jugador => jugador.gano == false));
      break;
      default:
   //     jugadores= this.jugador.TraerJugadores(ruta);
      break;
    }
    return jugadores;
  }
}

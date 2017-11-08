import { Injectable } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {JugadorService} from '../jugador/jugador.service';

@Injectable()
export class FiltradoJugadoresService {

  constructor(public jugador:JugadorService) { }
  public Filtrar(filtro:string,ruta:string){
    let jugadores;
    switch(filtro){
      case "ganadores":
        jugadores= this.jugador.TraerJugadores(ruta).map(data=>data.filter(jugador => jugador.gano == true)) as Observable<Jugador[]>;
      break;
      case"perdedores":
        jugadores=this.jugador.TraerJugadores(ruta).map(data=>data.filter(jugador => jugador.gano == false)) as Observable<Jugador[]>;
      break;
      default:
        jugadores= this.jugador.TraerJugadores(ruta) as Observable<Jugador[]>;
      break;
    }
    return jugadores;
  }
}

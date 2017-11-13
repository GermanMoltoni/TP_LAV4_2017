import { Injectable } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../juego/juego.service';
import { Observable }     from 'rxjs/Observable'; 

@Injectable()
export class FiltradoJugadoresService {

  constructor(public juego:JuegoService) { }
  public Filtrar(filtro:string,ruta:string):Observable<Juego[]>{
    let jugadores;
    switch(filtro){
      case "ganadores":
        jugadores= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.gano == true)) ;
      break;
      case"perdedores":
        jugadores= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.gano == false)) ;
      break;
      default:
        jugadores= this.juego.TraerJugadas(ruta) ;
      break;
    }
    return jugadores;
  }
}

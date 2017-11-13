import { Injectable } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../juego/juego.service';
import { Observable }     from 'rxjs/Observable'; 

@Injectable()
export class FiltrarJuegosService {
  constructor(public juego:JuegoService) { }
  public Filtrar(filtro:string,ruta:string):Observable<Juego[]>{
    let juegos;
    switch(filtro){
      case "ganadores":
        juegos= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.gano == true)) ;
      break;
      case"perdedores":
        juegos= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.gano == false)) ;
      break;
      case"Simon Dice":
      juegos= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.nombre == 'Simon Dice')) ;
      break;
      case"Agilidad Aritmetica":
      juegos= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.nombre == 'Agilidad Aritmetica')) ;
      break;
      case"Piedra Papel o Tijera":
      juegos= this.juego.TraerJugadas(ruta).map(data=>data.filter(juego => juego.nombre == 'Piedra Papel o Tijera')) ;
      break;
      default:
        juegos= this.juego.TraerJugadas(ruta) ;
      break;

    }
    return juegos;
  }
}

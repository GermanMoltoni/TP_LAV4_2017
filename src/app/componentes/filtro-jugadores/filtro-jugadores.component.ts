import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {FiltradoJugadoresService} from '../../servicios/filtrado-jugadores/filtrado-jugadores.service'
@Component({
  selector: 'app-filtro-jugadores',
  templateUrl: './filtro-jugadores.component.html',
  styleUrls: ['./filtro-jugadores.component.css']
})
export class FiltroJugadoresComponent implements OnInit {
  public jugadores: Jugador[];
  constructor(public filtro:FiltradoJugadoresService) { }

  ngOnInit() {
  }
  Listar(opcion:string){
    this.jugadores = this.filtro.Filtrar(opcion);
  }

}

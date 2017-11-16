import { Component, OnInit } from '@angular/core';
import {JugadorService} from '../../servicios/jugador/jugador.service'
import {Jugador} from '../../clases/jugador';
import { Observable }     from 'rxjs/Observable'; 
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  public jugadores ;
  constructor(public jugador:JugadorService) { }

  ngOnInit() {
    this.jugador.TraerJugadores('').subscribe(datos=>{this.jugadores = new LocalDataSource(datos) });
  }

}
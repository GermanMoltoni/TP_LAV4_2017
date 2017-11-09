import { Component, OnInit } from '@angular/core';
import {FiltradoJugadoresService} from '../../servicios/filtrado-jugadores/filtrado-jugadores.service'
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
  constructor(public filtro:FiltradoJugadoresService) { }

  ngOnInit() {
    this.Listar('todos');
  }
  Listar(opcion:string='todos'){
  
      this.filtro.Filtrar(opcion,'jugador').subscribe(datos=>{this.jugadores = new LocalDataSource(datos) });
  }
}

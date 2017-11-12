import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';

@Component({
  selector: 'app-piedra-papel-otijera-mas-listado',
  templateUrl: './piedra-papel-otijera-mas-listado.component.html',
  styleUrls: ['./piedra-papel-otijera-mas-listado.component.css']
})
export class PiedraPapelOtijeraMasListadoComponent implements OnInit {
  listadoParaCompartir:Juego[];
  
  constructor() {
    this.listadoParaCompartir = new Array<Juego>();
    
   }

  ngOnInit() {
  }
  capturaJuego(juego:Juego){
    this.listadoParaCompartir.push(juego);
  
  }
}

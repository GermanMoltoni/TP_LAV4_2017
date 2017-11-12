import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';

@Component({
  selector: 'app-simon-dice-mas-listado',
  templateUrl: './simon-dice-mas-listado.component.html',
  styleUrls: ['./simon-dice-mas-listado.component.css']
})
export class SimonDiceMasListadoComponent implements OnInit {
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
import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../../servicios/juego/juego.service'

@Component({
  selector: 'app-simon-dice-mas-listado',
  templateUrl: './simon-dice-mas-listado.component.html',
  styleUrls: ['./simon-dice-mas-listado.component.css']
})
export class SimonDiceMasListadoComponent implements OnInit {
  listadoParaCompartir:Juego[];
  
  constructor(public juegoService:JuegoService) { 
    this.listadoParaCompartir = new Array<Juego>();
    
   }

  ngOnInit() {
  }
  capturaJuego(juego:Juego){
    this.juegoService.Guardar(juego.ToObj());
    
    this.listadoParaCompartir.push(juego);
  
  }
}
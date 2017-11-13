import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../../servicios/juego/juego.service'

@Component({
  selector: 'app-piedra-papel-otijera-mas-listado',
  templateUrl: './piedra-papel-otijera-mas-listado.component.html',
  styleUrls: ['./piedra-papel-otijera-mas-listado.component.css']
})
export class PiedraPapelOtijeraMasListadoComponent implements OnInit {
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

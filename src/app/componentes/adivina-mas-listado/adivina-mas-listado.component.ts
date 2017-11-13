import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../../servicios/juego/juego.service'


@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../../servicios/juego/juego.service'
import {FiltrarJuegosService} from '../../servicios/filtrar-juegos/filtrar-juegos.service'


@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  listadoParaCompartir:Juego[];
  constructor(public juegoService:JuegoService,public filtro:FiltrarJuegosService) {
    this.listadoParaCompartir = new Array<Juego>();
  }

  ngOnInit() {
    this.filtro.Filtrar('Adivina El Número','juegos').subscribe(datos=>{this.listadoParaCompartir = datos });
    
  }
  capturaJuego(juego:Juego){
    this.juegoService.Guardar(juego.ToObj());
    this.filtro.Filtrar(juego.nombre,'juegos').subscribe(datos=>{this.listadoParaCompartir = datos });
    
  }
}
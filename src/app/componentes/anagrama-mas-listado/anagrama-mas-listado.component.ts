import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../../servicios/juego/juego.service'
import {FiltrarJuegosService} from '../../servicios/filtrar-juegos/filtrar-juegos.service'

@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {
  listadoParaCompartir:Juego[];
  
  constructor(public juegoService:JuegoService,public filtro:FiltrarJuegosService) { 
    this.listadoParaCompartir = new Array<Juego>();
  }

  ngOnInit() {
    this.filtro.Filtrar('Anagrama','juegos').subscribe(datos=>{this.listadoParaCompartir = datos });
    
  }
  capturaJuego(juego:Juego){
    this.juegoService.Guardar(juego.ToObj());
    console.log(juego.ToObj())
    this.filtro.Filtrar(juego.nombre,'juegos').subscribe(datos=>{this.listadoParaCompartir = datos });
    
  }
}
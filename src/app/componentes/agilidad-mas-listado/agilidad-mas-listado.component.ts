import { Component, OnInit } from '@angular/core';
import {Juego} from '../../clases/juego';
import {JuegoService} from '../../servicios/juego/juego.service'
import {FiltrarJuegosService} from '../../servicios/filtrar-juegos/filtrar-juegos.service'

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  listadoParaCompartir:Juego[];
  
  constructor(public juegoService:JuegoService,public filtro:FiltrarJuegosService) { 
    this.listadoParaCompartir = new Array<Juego>();
  }

  ngOnInit() {
    this.filtro.Filtrar('Agilidad Aritmética','juegos').subscribe(datos=>{this.listadoParaCompartir = datos });
    
  }
  capturaJuego(juego:Juego){
  
    this.juegoService.Guardar(juego.ToObj());
    this.filtro.Filtrar(juego.nombre,'juegos').subscribe(datos=>{this.listadoParaCompartir = datos });
    
  }

}


import { Component, OnInit } from '@angular/core';
import {FiltrarJuegosService} from '../../servicios/filtrar-juegos/filtrar-juegos.service'
import {Jugador} from '../../clases/jugador';
import { Observable }     from 'rxjs/Observable'; 
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-juegos-mas-listado',
  templateUrl: './juegos-mas-listado.component.html',
  styleUrls: ['./juegos-mas-listado.component.css']
})
export class JuegosMasListadoComponent implements OnInit {
  public juegos ;
  constructor(public filtro:FiltrarJuegosService) { }

  ngOnInit() {
    this.Listar('todos');
  }
  Listar(opcion:string='todos'){
      this.filtro.Filtrar(opcion,'juegos').subscribe(datos=>{this.juegos = new LocalDataSource(datos) });
  }
}

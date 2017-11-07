import { Component, OnInit,Input } from '@angular/core';
import {Juego} from '../../clases/juego'
@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.css']
})
export class ListadoResultadosComponent implements OnInit {
  @Input() private listado:Juego[];// Pasa info de un componente a otro.
  constructor() { }

  ngOnInit() {
  }

}

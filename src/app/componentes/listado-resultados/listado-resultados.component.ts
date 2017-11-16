import { Component, OnInit,Input } from '@angular/core';
import {Juego} from '../../clases/juego'
import {MatTableDataSource} from '@angular/material';

@Component({  
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.css']
})
export class ListadoResultadosComponent implements OnInit {
  @Input() public listado;// Pasa info de un componente a otro.
  displayedColumns = ['usuario', 'gano', 'fecha'];
  
  public dataSource = new MatTableDataSource<Juego>(this.listado);
  
  constructor() { }
  public puntaje:boolean=true;

  ngOnInit() {
  }

}

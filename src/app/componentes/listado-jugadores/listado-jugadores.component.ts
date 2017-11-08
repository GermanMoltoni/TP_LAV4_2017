import { Component, OnInit,Input } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {
  @Input() private jugadores;
  private data ;
  constructor() { }
  settings = {
    mode:'inline',
    actions:{
      add:true,
      edit:true,
      delete:true
    },
    add:{confirmCreate:true},
    edit:{
      confirmSave:true
    },
    delete:{confirmDelete:true},
    columns: {
      usuario: {
        title: 'ID'
      },
      cuit: {
        title: 'Full Name'
      },
      sexo: {
        title: 'User Name'
      },
      fecha: {
        title: 'Email'
      },
      gano: {
        title: 'Email'
      }
    }
  };
  ngOnInit() {
    this.jugadores.subscribe(datos=>{this.data = new LocalDataSource(datos) });
    
  }
 
  

}

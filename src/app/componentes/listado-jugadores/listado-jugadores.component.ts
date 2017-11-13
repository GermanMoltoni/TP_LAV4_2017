import { Component, OnInit,Input } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { SexoPipe } from '../../pipes/sexo/sexo.pipe';
import { validateConfig } from '@angular/router/src/config';
@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css'],
})
export class ListadoJugadoresComponent implements OnInit {
  @Input() private jugadores;
 
  constructor() { }
  settings = {
    mode:'inline',
    
    actions:{
      add:false,
      edit:false,
      delete:false
    },
    add:{confirmCreate:true},
    edit:{
      confirmSave:true
    },
    delete:{confirmDelete:true},
    columns: {
      usuario: {
        editable:false,
        title: 'Usuario',
      },
      sexo: {
        editable:false,
        title: 'Sexo',
        valuePrepareFunction: (value) => { 
          let pipe = new SexoPipe();
          return pipe.transform(value);
        }
      },
      mail: {
        editable:false,
        title: 'Mail'
      },
    }
  };
  ngOnInit() {
    
    
  }

  

}

import { Component, OnInit,Input } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ResultadoPipe } from '../../pipes/resultado.pipe';
@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.css']
})
export class ListadoJuegosComponent implements OnInit {
  @Input() public juegos;
  
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
       nombre: {
         editable:false,
         title: 'Nombre',
       },
       jugador: {
         editable:false,
         title: 'Usuario',
         valuePrepareFunction: (value) => { 
          return value.usuario;
        }
       },
       gano: {
         editable:false,
         title: 'Resultado',
         valuePrepareFunction: (value) => { 
           let pipe = new ResultadoPipe();

          return pipe.transform(value);
        }
       },
     }
   };
   ngOnInit() {
     
     
   }
 
   
 
 }
 

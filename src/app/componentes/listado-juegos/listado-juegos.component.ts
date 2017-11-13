import { Component, OnInit,Input } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.css']
})
export class ListadoJuegosComponent implements OnInit {
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
         title: 'Sexo'
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
 

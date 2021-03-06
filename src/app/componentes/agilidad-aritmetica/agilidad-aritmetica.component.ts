import { Component, OnInit,Output,EventEmitter,OnDestroy } from '@angular/core';
import {AgilidadAritmetica } from '../../clases/agilidad-aritmetica';
import {Juego} from '../../clases/juego';
import {Jugador} from '../../clases/jugador';

import {trigger,state,style,animate,transition} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css'],
  animations: [
    trigger('entrada', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({transform: 'translateX(-100%)'}))
      ])
    ]),
 
 
    trigger('entradabtn', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(200%)'}),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class AgilidadAritmeticaComponent implements OnInit {
  public juego : AgilidadAritmetica;
  public jugador:Jugador;
  public tiempoMaximo;
  public tiempo=60;
   public tiempoInicio: Date;
  public tiempoUltimoJug;
   public alertaGano:boolean=false;
  public alertaPerdio:boolean=false;
     @Output() enviarJuego:EventEmitter<Juego> =new EventEmitter<Juego>();
  public state;
  constructor() { 
    this.jugador = Jugador.getJugador();
    this.juego = new AgilidadAritmetica('Agilidad Aritmética', this.jugador);
    this.state = ":enter";
  }

  ngOnInit() {
    this.tiempoMaximo = setInterval(() => { 
          if (this.juego.estado && new Date().getTime() - this.tiempoUltimoJug.getTime() >= 60000) {
             
              this.Verificar();
              this.juego.estado = false;
          }
          if(this.juego.estado)
            this.tiempo--;
  }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.tiempoMaximo);
}
  GenerarNuevo(){
    if(!this.juego.estado){
   
    this.juego = new AgilidadAritmetica('Agilidad Aritmética',this.jugador);
    this.tiempo=60;
    }
    this.juego.GenerarNuevo();
    this.tiempoInicio = new Date();
    this.juego.estado = true;
    this.tiempoUltimoJug = new Date();
    this.alertaGano=false;
    this.alertaPerdio=false;
    
     
   }
  Verificar(){
    if(this.juego.estado){
      this.juego.Verificar();
      if(this.juego.gano){
        this.alertaGano=true;
      }
      else{
        this.alertaPerdio=true;
      }
   
      this.enviarJuego.emit(this.juego);
      this.juego.estado=false;
      return;
    }
     
  }

}

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
    trigger('entradainput', [
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
  public turnoJugador: boolean;
  public estado: boolean = false;
  public tiempoInicio: Date;
  public tiempoUltimoJug;
    @Output() enviarJuego:EventEmitter<Juego> =new EventEmitter<Juego>();
  public state;
  constructor() { 
    let jugador = Jugador.getJugador();
    this.juego = new AgilidadAritmetica('Agilidad Aritmética', jugador);
    this.state = ":enter";
  }

  ngOnInit() {
    this.tiempoMaximo = setInterval(() => { 
          if (this.estado && new Date().getTime() - this.tiempoUltimoJug.getTime() >= 60000) {
              this.estado = false;
              this.Verificar();
          }
          if(this.estado)
            this.tiempo--;
  }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.tiempoMaximo);
}
  GenerarNuevo(){
    let jugador = Jugador.getJugador();
    this.juego = new AgilidadAritmetica('Agilidad Aritmética',new Jugador('german','german','m'));
    this.juego.GenerarNuevo();
    this.tiempoInicio = new Date();
    this.estado = true;
    this.tiempoUltimoJug = new Date();
    
     
   }
  Verificar(){
    if(this.estado){
      this.juego.Verificar();
      this.enviarJuego.emit(this.juego);
      this.estado=false;
      return;
    }
     
  }

}
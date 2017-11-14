import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {AdivinaElNumero} from '../../clases/adivina-el-numero';
import {Juego} from '../../clases/juego';
import {Jugador} from '../../clases/jugador';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { ChangeDetectorRef } from "@angular/core";
 

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css'],
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
    trigger('entradasecre', [
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
export class AdivinaElNumeroComponent implements OnInit {
  public juego:AdivinaElNumero;
  public nIngresado:number;
  public state;
  public resultado:boolean=true;
  public estadoJuego:boolean;
  @Output() enviarJuego:EventEmitter<Juego> =new EventEmitter<Juego>();
  constructor(public change :ChangeDetectorRef) { 
    let jugador = Jugador.getJugador();
    this.juego = new AdivinaElNumero('Adivina El Número',jugador);
    this.state = ":enter";
  }
  ngOnInit() {
  }
  GenerarNuevo(){
    let jugador = Jugador.getJugador();
    this.juego = new AdivinaElNumero('Adivina El Número',jugador);
    this.juego.GenerarNuevo();
     this.estadoJuego=true;
   }
  Verificar(){
    if(this.estadoJuego){
      this.juego.Verificar();
       this.estadoJuego=false;
     this.enviarJuego.emit(this.juego);
    }
     
  }

}
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PiedraPapelOTijera } from '../../clases/piedra-papel-otijera';
import {Juego} from '../../clases/juego';
import {Jugador} from '../../clases/jugador';

@Component({
  selector: 'app-piedra-papel-otijera',
  templateUrl: './piedra-papel-otijera.component.html',
  styleUrls: ['./piedra-papel-otijera.component.css']
})
export class PiedraPapelOtijeraComponent implements OnInit {
  public juego:PiedraPapelOTijera;
  public jugador:Jugador;
  @Output() enviarJuego:EventEmitter<Juego> =new EventEmitter<Juego>();
  public img = './assets/interrogacion.jpg';
  constructor() { 

  }

  ngOnInit() {
  }

  Jugar(opcion:string){
    let jugador = Jugador.getJugador();
    if(jugador != null){
    this.juego = new PiedraPapelOTijera('Piedra Papel O Tijera',jugador);
    
    this.juego.GenerarNuevo();
    switch (opcion) {
      case 'piedra':
        this.juego.opcion=1;
        break;
      case 'papel':
        this.juego.opcion=2;
        break;
      case 'tijera':
        this.juego.opcion=3;
        break;
    }
    this.Verificar();
    
  }
  }
  Verificar(){
    this.juego.Verificar();
 
    switch (this.juego.maquina) {
      case 1:
        this.img='./assets/piedra.jpg';
        break;
      case 2:
      this.img='./assets/papel.jpg';
        break;
      case 3:
      this.img='./assets/tijera.jpg';
        break;
    }
    this.enviarJuego.emit(this.juego);
  }
}
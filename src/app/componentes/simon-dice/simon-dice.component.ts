import { Component, OnInit } from '@angular/core';
import {Simon} from '../../clases/simon';
import {Jugador} from '../../clases/jugador'
import {trigger,state,style,animate,transition} from '@angular/animations';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-simon-dice',
  templateUrl: './simon-dice.component.html',
  styleUrls: ['./simon-dice.component.css'],
  animations: [
    trigger('padState', [
      state('inactive', style({
        opacity: '0.6',
        transform: 'scale(1)'
      })),
      state('active',   style({
        opacity: '1',
        transform: 'scale(1.01)'
      })),
      transition('inactive <=> active', animate('200ms ease-out'))
    ])
  ]
})

export class SimonDiceComponent implements OnInit {
  public juego:Simon;
  public pads:any[] = [];
  constructor() { }

  ngOnInit() {
    
  }
  GenerarNuevo(){
    let datos = JSON.parse(localStorage.getItem("jugador"));
    let jugador = new Jugador(datos.usuario,datos.mail,datos.sexo);
    this.juego = new Simon('Simon Dice',jugador);
    this.juego.GenerarNuevo(); 
    this.MostrarSecuencia();
  }
  VerificarJugada(idPad:number){
    this.flash(idPad);
    let resultado = this.juego.TurnoJugador(idPad);
    
    if( resultado && this.juego.secJugador.length == this.juego.secMaquina.length){
      this.juego.TurnoMaquina();
      this.MostrarSecuencia();
      this.juego.secJugador = new Array<number>();
    }
    else if(!resultado){
      console.log("perdio")
    }
      
  }
  MostrarSecuencia(){
    let arr = [1,2,4];
    for (let i = 1; i <= 3; ++i) {
      this.flash(arr[i])
      setTimeout(()=>{console.log(123)},500);
    }

}
flash(idPad){
  this.pads[idPad-1] =  this.pads[idPad-1]  === 'active' ? 'inactive' : 'active';
  setTimeout(()=>{this.pads[idPad-1] =  this.pads[idPad-1]  === 'active' ? 'inactive' : 'active'},200);
}
}

import { Component, OnInit } from '@angular/core';
import {Simon} from '../../clases/simon';
import {Jugador} from '../../clases/jugador'
import {trigger,state,style,animate,transition} from '@angular/animations';
import {Observable} from 'rxjs/Observable'
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs";

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
  private subscription: Subscription;
  private subscription1: Subscription;
  
  ngOnInit() {
    
  }
  GenerarNuevo(){
    let jugador = Jugador.getJugador();
    if(jugador != null){
      this.juego = new Simon('Simon Dice',jugador);
      this.juego.GenerarNuevo(); 
      this.MostrarSecuencia();
    }
    
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
     
       console.log(i+"\n") 

    
    }


}
flash(idPad){
  let timer1 = TimerObservable.create(1000);
  this.subscription = timer1.subscribe(t => {
    this.toggleMove(idPad)});
  let timer = TimerObservable.create(500);
  this.subscription1 = timer.subscribe(t => {
    this.toggleMove(idPad)});
}
toggleMove(idPad) {
  this.pads[idPad-1]  = (this.pads[idPad-1]  === 'inactive' ? 'active' : 'inactive');
}
}

import { Component, OnInit,OnDestroy } from '@angular/core';
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
    //  transition('inactive <=> active', animate('200ms ease-out'))
    ])
  ]
})

export class SimonDiceComponent implements OnInit,OnDestroy {
  public juego:Simon;
  public turno:boolean;
  public  padState = ['inactive', 'inactive', 'inactive', 'inactive'];
  constructor() { }

  GenerarNuevo(){
    
   // let jugador = Jugador.getJugador();
   // if(jugador != null){
    this.juego = new Simon('Simon Dice',new Jugador('german','german','m'));
          this.juego.GenerarNuevo(); 

    this.ComenzarJuego()
 
   // }
    
  }
 
 
  private gameTimeoutTimer;
 
 
 
   /**
    * Determines whether we are currently playing the sequence or waiting for user to repeat it
    */
   private playerTurn: boolean;
 
   /**
    * Indicates whether the game is currently active
    */
   playing: boolean = false;
 
    
   /**
    * Keeps track of the time when the game started
    */
   private gameStartTime: Date;
 
  
   /**
    * Stores the time of the last move. We use this to implement the game timeout.
    */
   private lastMoveTime: Date;
 
   
   ngOnInit() {
     /* Set up the game timeout check */
     this.gameTimeoutTimer = setInterval(() => {
       if (this.playing && new Date().getTime() - this.lastMoveTime.getTime() >= 20000) {
         this.playing = false;
         this.TerminarJuego();
       }
     }, 1000); 
   }
 
   ngOnDestroy() {
     clearInterval(this.gameTimeoutTimer);
   }
 
   ComenzarJuego() {
     this.gameStartTime = new Date();
     this.TurnoMaquina();
   }
 
   TurnoMaquina() {
     this.juego.TurnoMaquina();
     this.juego.turno = 0;
     this.MostrarSecuencia();
     this.updateModel();
   }
 
   flash(idPad) {
     return new Promise(resolve => {
       this.padState[idPad] = 'active';
       setTimeout(() => {
         this.padState[idPad] = 'inactive';
         resolve();
       }, 300);
     });
   }
 
   MostrarSecuencia() {
     if (this.juego.turno < this.juego.secMaquina.length) {
       const idPad = this.juego.secMaquina[this.juego.turno];
       this.flash(idPad).then(() => {
         this.juego.turno++;
         setTimeout(() => this.MostrarSecuencia(), 100);
       });
     } else {
       this.playerTurn = true;
       this.juego.turno = 0;
       this.lastMoveTime = new Date();
     }
   }
 
   VerificarJugada(idPad: number) {
     this.lastMoveTime = new Date();
     if (!this.playing) {
       this.playing = true;
       setTimeout(() => this.ComenzarJuego(), 300);
       return;
     }
     if (this.playerTurn) {
       this.playerTurn = false;
       this.updateModel();
       this.flash(idPad).then(() => {
         if (idPad !== this.juego.secMaquina[this.juego.turno]) {
           this.TerminarJuego();
           return;
         }
         this.juego.turno++;
         if (this.juego.Verificar()) {
           this.playerTurn = false;
           this.SumarPuntaje();
           this.TurnoMaquina();
         } else {
           this.playerTurn = true;
         }
       });
     }
   }
 
   SumarPuntaje() {
     this.juego.puntaje++;
   }
 
 TerminarJuego() {
     console.log('Game Over!');
     this.updateModel(true);

 
 
   }
 
   private updateModel(gameOver = false) {
    
    console.log(  {score: this.juego.puntaje,
       playing: this.playing,
       turno: this.juego.turno,
       gameOver: gameOver
      } )
   }
  }
 

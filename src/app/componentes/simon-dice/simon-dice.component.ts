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
     ])
  ]
})

export class SimonDiceComponent implements OnInit,OnDestroy {
    public juego:Simon;

    public padState = ['inactive', 'inactive', 'inactive', 'inactive'];
    public tiempoMaximo;
    public turnoJugador: boolean;
    public estado: boolean = false;
    public tiempoInicio: Date;
    public tiempoUltimoJug: Date;
    constructor() { }

    GenerarNuevo(){
       // let jugador = Jugador.getJugador();
        //if(jugador != null){
            this.juego = new Simon('Simon Dice',new Jugador('german','german','m'));
            this.juego.GenerarNuevo();
            this.ComenzarJuego()
      //  }
    }
    /**
     * Verifica que si el jugador no realizo su jugada pierda el juego
    */
    ngOnInit() {
        this.tiempoMaximo = setInterval(() => {
            if(this.tiempoUltimoJug != null){
                if (this.estado && new Date().getTime() - this.tiempoUltimoJug.getTime() >= 2000) {
                    this.estado = false;
                    this.TerminarJuego(false);
                }
            }
           
        }, 1000); 
    }
 
    ngOnDestroy() {
        clearInterval(this.tiempoMaximo);
    }
    /**
    * Tiempo de inicio de juego, estado -> true y turno de maquina  
    */
    ComenzarJuego() {
        this.tiempoInicio = new Date();
        this.TurnoMaquina();
        this.estado=true;
    }
    /**
     * Turno de maquina y muestra la secuencia
     */
    TurnoMaquina() {
        this.juego.TurnoMaquina();
        this.MostrarSecuencia();
    }
    /**
     * Cambia estado del pad 
     * @param idPad id del pad recibido
     */
    flash(idPad) {
        return new Promise(resolve => {
            this.padState[idPad] = 'active';
            setTimeout(() => {
                this.padState[idPad] = 'inactive';
                resolve();
            }, 300);
        });
    }
    /**
     * Muestra la secuencia de juego de la maquina
     */
    MostrarSecuencia() {
        if (this.juego.turno < this.juego.secMaquina.length) {
            const idPad = this.juego.secMaquina[this.juego.turno];
            this.flash(idPad).then(() => {
                this.juego.turno++;
                setTimeout(() => this.MostrarSecuencia(), 200);
            });
        } 
        else {
            this.turnoJugador = true;
            this.juego.turno = 0;
            this.tiempoUltimoJug = new Date();
        }
    }
    /**
     * Verifica de jugada ingresada por el jugador
     * @param idPad 
     */
    VerificarJugada(idPad: number) {
        this.tiempoUltimoJug = new Date();
        if (this.estado && this.turnoJugador) {
            this.turnoJugador = false;
            this.flash(idPad).then(() => {
                if (idPad !== this.juego.secMaquina[this.juego.turno]) {
                    this.TerminarJuego(false);
                    return;
                }
                if(this.juego.turno == 5){
                    this.TerminarJuego(true);
                    return;
                }
                this.juego.turno++;
                if (this.juego.Verificar()) {
                    this.turnoJugador = false;
                    this.SumarPuntaje();
                    this.updateModel();
                    this.TurnoMaquina();
                } 
                else
                    this.turnoJugador = true;
            });
        }
    }
    /**
     * Suma puntos 
     */
    SumarPuntaje() {
        this.juego.puntaje++;
    }
    /**
     * Pierde juego
     */
    TerminarJuego(gano=null) {
        this.updateModel(gano);
    }
    /**
     * 
     * @param gameOver 
     */
    public updateModel(gano = null) {
    console.log(  {score: this.juego.puntaje,
       estado: this.estado,
       turno: this.juego.turno,
       gano: gano
      } )
   }
  }
 

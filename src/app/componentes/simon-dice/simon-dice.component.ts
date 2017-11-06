import { Component, OnInit } from '@angular/core';
import {Simon} from '../../clases/simon';
import {Jugador} from '../../clases/jugador'

@Component({
  selector: 'app-simon-dice',
  templateUrl: './simon-dice.component.html',
  styleUrls: ['./simon-dice.component.css']
})
export class SimonDiceComponent implements OnInit {
  public juego:Simon;
  constructor() { }

  ngOnInit() {
  }
  GenerarNuevo(){
    let datos = JSON.parse(localStorage.getItem("jugador"));
    let jugador = new Jugador(datos.usuario,datos.mail,datos.sexo);
    this.juego = new Simon('Simon Dice',jugador);
    this.juego.GenerarNuevo();
    this.juego.TurnoMaquina();
    console.log(this.juego.secMaquina)
     
  }
  VerificarJugada(idPad:number){
    this.juego.TurnoJugador(idPad);   
    if(this.juego.Verificar() && this.juego.secJugador.length == this.juego.secMaquina.length)
      this.juego.TurnoMaquina();
  }
}

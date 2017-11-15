import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Anagrama} from '../../clases/anagrama';
import {Jugador} from '../../clases/jugador';
import {Juego} from '../../clases/juego';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
public juego:Anagrama;
public jugador:Jugador;
public palabra:string;
@Output() enviarJuego:EventEmitter<Juego> =new EventEmitter<Juego>();

public palabras:string[]=["programación","auto","perro","dia","juego","sol","libro","materia","anagrama","color","trabajo"];
  constructor() { 
    this.jugador = Jugador.getJugador();
    this.juego = new Anagrama('Anagrama',this.jugador,this.palabras);
    this.juego.estado=false;
    
  }
  GenerarNuevo(){
    this.juego = new Anagrama('Anagrama',this.jugador,this.palabras);
    this.juego.GenerarNuevo();
    this.juego.estado=true;
  }
  Verificar(){
    if(this.juego.estado){
      this.juego.respuesta = this.palabra;
      this.juego.Verificar();
      this.juego.estado = false;
      this.enviarJuego.emit(this.juego);
    }
    
  }
  ngOnInit() {
  }

}

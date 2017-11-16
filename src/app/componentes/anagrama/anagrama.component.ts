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
 
public clase:string=" text-center alert alert-info";
 
@Output() enviarJuego:EventEmitter<Juego> =new EventEmitter<Juego>();

public palabras:string[]=["programación","luz","auto","perro","día","juego","sol","libro","materia","anagrama","color","trabajo"];
  constructor() { 
    this.jugador = Jugador.getJugador();
    this.juego = new Anagrama('Anagrama',this.jugador,this.palabras);
    this.juego.estado=false;
    
  }
  GenerarNuevo(){
    this.clase=" text-center alert alert-info";
    this.juego = new Anagrama('Anagrama',this.jugador,this.palabras);
    this.juego.GenerarNuevo();
    this.juego.estado=true;
  }
  Verificar(){
    if(this.juego.estado){
      this.juego.respuesta = this.palabra;
      this.juego.Verificar();
      this.juego.cadena_juego = this.juego.cadena_secreta;
      
      if(this.juego.gano){
        this.clase = " text-center alert alert-success";
      }
      else
        this.clase = " text-center alert alert-danger";
      
       
      this.enviarJuego.emit(this.juego);
    }
    
  }
  ngOnInit() {
  }

}

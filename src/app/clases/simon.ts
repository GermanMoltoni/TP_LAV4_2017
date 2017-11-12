import {Juego} from './juego';
import {Jugador} from './jugador';
export class Simon extends Juego{
     public secMaquina:number[];
    public opcJugador:number;
    public puntaje:number;
    public turno:number;
     constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);
    }
    GenerarNuevo(){
         this.puntaje = 0;
        this.turno = 0;
        this.secMaquina = new Array<number>();
      
    }
    Verificar(){
        if(this.opcJugador !== this.secMaquina[this.turno]){
            return true;
        }
        return false;
            
    }
    TurnoMaquina(){
        this.secMaquina.push(Math.floor(Math.random() * 4) );
        this.turno = 0;
        
    }
}

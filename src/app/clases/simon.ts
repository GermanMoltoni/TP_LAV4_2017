import {Juego} from './juego';
import {Jugador} from './jugador';
export class Simon extends Juego{
    public nivel:number;
    public secMaquina:number[];
    public opcJugador:number;
    public puntaje:number;
    public turno:number;
    public dificultad:number=1;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);
    }
    GenerarNuevo(){
        this.nivel = 1;
        this.puntaje = 0;
        this.turno = 0;
        this.secMaquina = new Array<number>();
      
    }
    Verificar(){
        if(this.opcJugador == this.secMaquina[this.turno]){
            return true;
        }
        return false;
            
    }
    TurnoMaquina(){
        this.secMaquina.push(Math.floor(Math.random() * 4) );
        this.turno = 0;
        
    }
}

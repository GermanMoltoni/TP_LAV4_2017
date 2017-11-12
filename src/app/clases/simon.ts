import {Juego} from './juego';
import {Jugador} from './jugador';
export class Simon extends Juego{
    public nivel:number;
    public secMaquina:number[];
    public secJugador:number[];
    public puntaje:number;
    public turno;
    public dificultad:number=1;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);
    }
    GenerarNuevo(){
        this.nivel = 1;
        this.puntaje = 0;
        this.turno = 0;
        this.secJugador = new Array<number>();
        this.secMaquina = new Array<number>();
      
    }
    Verificar(){
        if(this.secJugador[this.turno] == this.secMaquina[this.turno]){
        /*    console.log("Verifica jugada: "+this.turno)
            console.log("maquina: "+this.secMaquina[this.turno]+"aarra"+this.secMaquina);
            console.log("jugador: "+this.secJugador[this.turno]+"aarra"+this.secJugador);
            */this.turno++;
            return true;
        }
        return false;
            
    }
    TurnoMaquina(){
        this.secMaquina.push(Math.floor(Math.random() * 4) );
        this.turno = 0;
        
    }
    TurnoJugador(idPad:number){
        this.secJugador.push(idPad);
        return this.Verificar();
    }
}

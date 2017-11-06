import {Juego} from './juego';
import {Jugador} from './jugador';
export class Simon extends Juego{
    public nivel:number;
    public secMaquina:number[];
    public secJugador:number[];
    public puntaje:number;
    public turno;
    public dificultad;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);
    }
    GenerarNuevo(){
        this.nivel = 1;
        this.puntaje = 0;
        this.secJugador = new Array<number>();
        this.secMaquina = new Array<number>();

    }
    Verificar(){
        this.secJugador.map(n=>{
            console.log(this.secMaquina[n])
        });
    }
    TurnoMaquina(){
        this.secMaquina.push(Math.floor(Math.random() * 4) + 1);
    }
    TurnoJugador(idPad:number){
        this.secJugador.push(idPad);
    }
}


import {Juego} from './juego';
import {Jugador} from './jugador';

export class PiedraPapelOTijera  extends Juego{
    public maquina:number;
    public opcion:number;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);
    }
    GenerarNuevo(){
        this.maquina = Math.floor(Math.random() * 3) + 1;
    }
    Verificar(){
        this.GenerarNuevo();
        this.gano = (this.maquina == this.opcion);
        this.fecha = (new Date()).toLocaleDateString("es");
    }
    ToObj(){
        return {
            jugador:this.jugador.toObj(),
            nombre:this.nombre,
            gano:this.gano,
            puntaje:null
        }
    }
}
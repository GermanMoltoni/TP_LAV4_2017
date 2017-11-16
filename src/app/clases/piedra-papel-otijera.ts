
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
        if((this.opcion ==  1 && this.maquina == 3) ||(this.opcion == 2 && this.maquina == 1) || (this.opcion ==  3 && this.maquina == 2)){
            this.gano = true;
        }
        else if(this.opcion ==   this.maquina)
            this.gano= null;
        else
            this.gano = false;
        this.fecha = (new Date()).toLocaleDateString("es");
    }
    ToObj(){
        return {
            jugador:this.jugador.toObj(),
            nombre:this.nombre,
            gano:this.gano,
            puntaje:null,
            fecha:this.fecha
        }
    }
}
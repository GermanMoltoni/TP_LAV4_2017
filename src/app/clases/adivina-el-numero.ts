import {Juego} from './juego';
import {Jugador} from './jugador';

export class AdivinaElNumero extends Juego{
    public numeroSecreto:number;
    public nIngresado:number;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);   
    }

    Verificar(){
         this.gano = (this.numeroSecreto == this.nIngresado);
         this.fecha = (new Date()).toLocaleDateString("es");
    }
    GenerarNuevo(){
        this.gano=false;
        this.numeroSecreto = Math.round(Math.random()*10);
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
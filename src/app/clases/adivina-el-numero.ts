import {Juego} from './juego';
import {Jugador} from './jugador';

export class AdivinaElNumero extends Juego{
    public numeroSecreto:number;
    public nIngresado:number;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);   
    }
    Verificar(){
        return (this.gano = this.numeroSecreto == this.nIngresado);
    }
    GenerarNuevo(){
        this.gano=false;
        this.numeroSecreto = Math.round(Math.random()*100);
        console.log(this.numeroSecreto);
    }
}
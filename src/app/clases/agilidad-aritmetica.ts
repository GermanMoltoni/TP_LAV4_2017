import {Juego} from './juego';
import {Jugador} from './jugador';

export class AgilidadAritmetica extends Juego{
    public numUno:number;
    public numDos:number;
    public operador:string;
    public nIngresado:number;
    public resultado:number;
    constructor(nombre:string,jugador:Jugador){
        super(nombre,jugador);
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
    GenerarNuevo(){
        this.gano=false;
        this.numUno = Math.round(Math.random()*100);
        this.numDos =  Math.round(Math.random()*100);
        switch (Math.floor(Math.random() * 3) + 1) {
            case 1:
                this.resultado = this.numUno+this.numDos;
                this.operador = '+';
                break;
            case 2:
                this.resultado = this.numUno-this.numDos;
                this.operador = '-';
                break;
            case 3:
                this.resultado =  parseInt((this.numUno/this.numDos).toFixed(2));
                this.operador = '/';
                break;
            case 4:
                this.resultado = this.numUno*this.numDos;
                this.operador = '*';
                break;
            default:
                break;
        }
    }
    Verificar(){
         this.gano = (this.nIngresado == this.resultado);
         this.fecha = (new Date()).toLocaleDateString("es");
    }
}
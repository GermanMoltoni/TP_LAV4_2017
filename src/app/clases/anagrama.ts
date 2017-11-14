import {Juego} from './juego';
import {Jugador} from './jugador';
import {StringLib} from './string-lib';
export class Anagrama extends Juego {
    public arr_palabras:string[];
    public arr_length:number;
    public cadena_secreta:string;
    public cadena_juego:string;
    constructor(nombre:string,jugador:Jugador,arr_palabras){
        super(nombre,jugador);
        this.arr_palabras = arr_palabras;
        this.arr_length = this.arr_palabras.length;
    }
    public ObtenerCadenaSecreta(){
        return this.arr_palabras[Math.floor(Math.random() * this.arr_length)];
    }
    public ObtenerCadenaNueva(){
        let aux;
        do{
            aux= StringLib.shuffle(this.cadena_secreta);
        }
        while (aux === this.cadena_secreta);
        return aux;
    }
    public ToObj(){

    }
    public GenerarNuevo(){
        this.cadena_secreta = this.ObtenerCadenaSecreta();
        this.cadena_juego = this.ObtenerCadenaNueva();
    }
    public Verificar(){

    }
}

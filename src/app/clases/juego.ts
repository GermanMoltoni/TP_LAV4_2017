import {Jugador} from './jugador';

export  abstract class Juego {
    public nombre:string;
    public gano:boolean;
    public puntaje:number;
    public jugador:Jugador;
    public tiempo;
    public maxIntentos:number;
    public fecha:string;
    constructor(nombre:string,jugador:Jugador){
        this.nombre=nombre;
        this.gano=false;
        this.jugador = jugador;
    }
    public abstract  Verificar();
    public  abstract GenerarNuevo();
    public abstract ToObj();
}
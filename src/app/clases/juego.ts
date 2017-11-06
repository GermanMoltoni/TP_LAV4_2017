import {Jugador} from './jugador';

export  abstract class Juego {
    public nombre:string;
    public gano:boolean;
    public jugador:Jugador;
    
    public intentos:number;
    public tiempo;
    public maxIntentos:number;
    constructor(nombre:string,jugador:Jugador){
        this.nombre=nombre;
        this.gano=false;
        this.jugador = jugador;
    }
    public abstract  Verificar();
    public  abstract GenerarNuevo();
}
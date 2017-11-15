import {Jugador} from './jugador';

export  abstract class Juego {
    public nombre:string;
    public gano:boolean;
    public puntaje:number;
    public jugador:Jugador;
    public tiempo;
    public fecha:string;
    public estado:boolean;
    public turnoJugador:boolean;
    constructor(nombre:string,jugador:Jugador){
        this.nombre=nombre;
        this.gano=false;
        this.estado=false;
        this.turnoJugador=false;
        this.jugador = jugador;
    }
    public abstract  Verificar();
    public  abstract GenerarNuevo();
    public abstract ToObj();
}
export class Jugador {
    public usuario:string;
    public email:string;
    public puntaje:number;
    public fecha:string;
    public sexo:string;
    public gano:boolean;
    constructor(usuario:string,email:string,puntaje:number,fecha:string,sexo:string,gano:boolean){
        this.usuario=usuario;
        this.email=email;
        this.puntaje=puntaje;
        this.fecha=fecha;
        this.sexo=sexo;
        this.gano=gano;   
    }

}

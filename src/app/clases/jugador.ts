export class Jugador {
    public usuario:string;
    public email:string;
    public puntaje:number;
    public fecha:string;
    public sexo:string;
    public gano:boolean;
    public password:string;
    constructor(usuario:string,email:string,sexo:string,password?:string,puntaje?:number,fecha?:string,gano?:boolean){
        this.usuario=usuario;
        this.email=email;
        this.puntaje=puntaje;
        this.fecha=fecha;
        this.sexo=sexo;
        this.gano=gano;   
        this.password=password;   
    }

}

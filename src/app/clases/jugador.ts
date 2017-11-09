export class Jugador {
    public usuario:string;
    public mail:string;
    public puntaje:number;
    public fecha:string;
    public sexo:string;
    public gano:boolean;
    public password:string;
    constructor(usuario:string,mail:string,sexo:string,password?:string,puntaje?:number,fecha?:string,gano?:boolean){
        this.usuario=usuario;
        this.mail=mail;
        this.puntaje=puntaje;
        this.fecha=fecha;
        this.sexo=sexo;
        this.gano=gano;   
        this.password=password;   
    }
    static getJugador(){
        let datos = JSON.parse(localStorage.getItem("jugador"));
        if(datos != null)
            return new Jugador(datos.usuario,datos.mail,datos.sexo);
        return null;
    }
}

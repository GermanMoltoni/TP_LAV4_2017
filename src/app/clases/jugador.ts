export class Jugador {
    public usuario:string;
    public mail:string;
    public fecha:string;
    public sexo:string;
    public password:string;
    constructor(usuario:string,mail:string,sexo:string,password?:string){
        this.usuario=usuario;
        this.mail=mail;
        this.sexo=sexo;
        this.password=password;   
    }
    static getJugador(){
        let datos = JSON.parse(localStorage.getItem("jugador"));
        if(datos != null)
            return new Jugador(datos.usuario,datos.mail,datos.sexo);
        return null;
    }
    toObj(){
        return {usuario:this.usuario,mail:this.mail,sexo:this.sexo,password:this.password};
    }
}

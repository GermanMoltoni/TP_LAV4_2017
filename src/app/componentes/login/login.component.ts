import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas
import { FormsModule  }   from '@angular/forms';
import {JugadorService} from '../../servicios/jugador/jugador.service';
import {Jugador} from '../../clases/jugador';
  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public usuario:string;
    public password:string;
    public jugador:Jugador;
    public error:string;
  constructor(private route: ActivatedRoute,
    private router: Router,private jugadorHttp:JugadorService) { }

  ngOnInit() {
  }
  onClick(){
    this.jugadorHttp.Login('login',{usuario:this.usuario,password:this.password}).subscribe(res=>{
      if(res.msg != undefined){
         localStorage.removeItem("token");
        localStorage.removeItem("jugador");
        
      } 
      else{
        localStorage.setItem("jugador",JSON.stringify(res.jugador));
        localStorage.setItem("token",res.token);
        this.router.navigate(['juegos']);
      }
    });

  }


}
 




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas
import { FormsModule  }   from '@angular/forms';
import {JugadorService} from '../../servicios/jugador/jugador.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private usuario:string;
    private password:string;
  constructor(private route: ActivatedRoute,
    private router: Router,private jugadorHttp:JugadorService) { }

  ngOnInit() {
  }
  onClick(){
    this.jugadorHttp.Login('login',{usuario:this.usuario,password:this.password});
    localStorage.setItem('token','true');
        localStorage.setItem('usuario',this.usuario);

    this.router.navigate(['menu']);
  }
 

}
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas
import { FormsModule  }   from '@angular/forms';
import {JugadorService} from '../../servicios/jugador/jugador.service';
import {Jugador} from '../../clases/jugador';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AlertaComponent} from '../alerta/alerta.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private usuario:string;
    private password:string;
    private jugador:Jugador;
    private error:string;
  constructor(private route: ActivatedRoute,
    private router: Router,private jugadorHttp:JugadorService,public dialog: MatDialog) { }

  ngOnInit() {
  }
  onClick(){
    this.jugadorHttp.Login('login',{usuario:this.usuario,password:this.password}).subscribe(res=>{
      if(res.msg != undefined){
        this.dialog.open(AlertaComponent,{data:{title:"Error",msg:res.msg}})
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
 




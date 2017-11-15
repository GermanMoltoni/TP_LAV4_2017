import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas
import { FormsModule, Validators,FormBuilder,FormControl,FormGroup }   from '@angular/forms';
import {JugadorService} from '../../servicios/jugador/jugador.service';
import {Jugador} from '../../clases/jugador';
  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password:FormControl = new FormControl('',[Validators.required,Validators.minLength(8)]);
  public usuario:FormControl = new FormControl('',[Validators.required]);
    public jugador:Jugador;
    public error:string='';
    public registroForm:FormGroup = this.builder.group({
      usuario : this.usuario,
      password:this.password
    });
  constructor(public route: ActivatedRoute,
    public router: Router,public jugadorHttp:JugadorService,public builder:FormBuilder) { }

  ngOnInit() {
  }
  onClick(){
    let usuario =  this.registroForm.get('usuario').value;
    let password= this.registroForm.get('password').value;
    
    this.jugadorHttp.Login('login',{usuario:usuario,password:password}).subscribe(res=>{
      if(res.msg != undefined && res.msg != null){
         localStorage.removeItem("token");
        localStorage.removeItem("jugador");this.error =res.msg;
        
      } 
      else{
         
        localStorage.setItem("jugador",JSON.stringify(res.jugador));
        localStorage.setItem("token",res.token);
        this.router.navigate(['juegos']);
      }
    });

  }


}
 




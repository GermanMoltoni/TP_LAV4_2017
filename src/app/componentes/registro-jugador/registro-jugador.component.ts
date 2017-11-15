
import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators,FormBuilder,FormControl,FormGroup }   from '@angular/forms';
import {JugadorService} from '../../servicios/jugador/jugador.service';
import {Jugador} from '../../clases/jugador';
import { ActivatedRoute,Router }   from '@angular/router';//rutas


@Component({
  selector: 'app-registro-jugador',
  templateUrl: './registro-jugador.component.html',
  styleUrls: ['./registro-jugador.component.css']
})
export class RegistroJugadorComponent implements OnInit {
  public error:string='';
  public inputUsuario:FormControl = new FormControl('',[Validators.required]);
  public inputMail:FormControl = new FormControl('',[Validators.required,Validators.minLength(5),Validators.email]);
  public inputPassword:FormControl = new FormControl('',[Validators.required]);
  public radioSexo:FormControl = new FormControl('');
  public registroForm:FormGroup = this.builder.group({
    usuario : this.inputUsuario,
    mail: this.inputMail,
    password:this.inputPassword,
    sexo:this.radioSexo
  });
  constructor(public builder:FormBuilder,public jugadorService: JugadorService,public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  }
  onClick(){
    console.log(this.registroForm.get('sexo').value);
    let usuario =  this.registroForm.get('usuario').value;
    let mail=  this.registroForm.get('mail').value;
    let password= this.registroForm.get('password').value;
    let sexo = this.registroForm.get('sexo').value;
    let jugador: Jugador = new Jugador(usuario,mail,sexo,password);
    this.jugadorService.Crear('registro',jugador).subscribe(res=>{
      if(res.msg != undefined && res.msg != null)
        this.error = res.msg;
      else{
        localStorage['jugador']=JSON.stringify(res.jugador);
        localStorage['token']=res.token;
        
        this.router.navigate(['/juegos']);
        
      }
    });
  }
 
}
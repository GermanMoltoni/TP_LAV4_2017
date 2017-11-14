import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }   from '@angular/router';//rutas

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    if(localStorage['jugadores'] == null){
      localStorage.setItem('jugadores',JSON.stringify([
        {usuario:'carlos_uno',mail:'carlos@salajuegos',sexo:'M',password:'123321123'},
        {usuario:'alejandro_dos',mail:'ale@salaprueba',sexo:'M',password:'222222222'},
        {usuario:'laura_tres',mail:'laura@hotmail.com',sexo:'F',password:'111111222'},
        {usuario:'Juan_cuatro',mail:'juan@test',sexo:'M',password:'123123123'},
      ]));
    }
    if(localStorage['jugadas'] == null){
      localStorage.setItem('jugadas',JSON.stringify([]));
    }
    

    if(localStorage.getItem('token') != null && localStorage.getItem("jugador") != null)
      this.router.navigate(['juegos']);
  }

}

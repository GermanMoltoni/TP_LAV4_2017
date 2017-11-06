import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//----------------------------------
import { RouterModule,Routes }   from '@angular/router';//rutas

//---------------------------------

import { AnagramaComponent } from '../../componentes/anagrama/anagrama.component';
import { ErrorComponent } from '../../componentes/error/error.component';
import { PiedraPapelOtijeraComponent } from '../../componentes/piedra-papel-otijera/piedra-papel-otijera.component';
import { AgilidadAritmeticaComponent } from '../../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ListadoJugadoresComponent } from '../../componentes/listado-jugadores/listado-jugadores.component';
import { ListadoResultadosComponent } from '../../componentes/listado-resultados/listado-resultados.component';
import { AdivinaElNumeroComponent } from '../../componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from '../../componentes/login/login.component';
import { RegistroJugadorComponent } from '../../componentes/registro-jugador/registro-jugador.component';
import { AboutMeComponent } from '../../componentes/about-me/about-me.component';
import { MenuPrincipalComponent } from '../../componentes/menu-principal/menu-principal.component';
import { PaginaPrincipalComponent } from '../../componentes/pagina-principal/pagina-principal.component';
import { JuegosComponent } from '../../componentes/juegos/juegos.component';
import { MenuJuegosComponent } from '../../componentes/menu-juegos/menu-juegos.component';
import { RecoverPasswordComponent } from '../../componentes/recover-password/recover-password.component';

//------------------------------------------
const routes: Routes = [
  {path:'juegos',component:JuegosComponent,
  children:[
    {path:'adivina',component:AdivinaElNumeroComponent},
    {path:'agilidad',component:AgilidadAritmeticaComponent},
    {path:'piedrapapelotijera',component:PiedraPapelOtijeraComponent}, 
  ]},
 
  

  {path:'',component:PaginaPrincipalComponent},
 
  {path:'about',component:AboutMeComponent},
  
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegistroJugadorComponent}, 
  {path:'recover',component:RecoverPasswordComponent}, 
  
];
//-------------------
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RutasModule { }

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
import { MenuCardComponent } from '../../componentes/menu-card/menu-card.component';
import { SimonDiceComponent } from '../../componentes/simon-dice/simon-dice.component'; 
import { AdivinaMasListadoComponent } from '../../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { JugadoresComponent } from '../../componentes/jugadores/jugadores.component';
import { PiedraPapelOtijeraMasListadoComponent } from '../../componentes/piedra-papel-otijera-mas-listado/piedra-papel-otijera-mas-listado.component';
import { SimonDiceMasListadoComponent } from '../../componentes/simon-dice-mas-listado/simon-dice-mas-listado.component';
import { JuegosMasListadoComponent } from '../../componentes/juegos-mas-listado/juegos-mas-listado.component';
import { AnagramaMasListadoComponent } from '../../componentes/anagrama-mas-listado/anagrama-mas-listado.component';

//------------------------------------------
const routes: Routes = [
  {path:'juegos',component:JuegosComponent,
  children:[
    {path:'',component:MenuCardComponent},
    {path:'adivina',component:AdivinaMasListadoComponent},
    {path:'agilidad',component:AgilidadMasListadoComponent},
    {path:'ppot',component:PiedraPapelOtijeraMasListadoComponent}, 
    {path:'anagrama',component:AnagramaMasListadoComponent},
    {path:'simon',component:SimonDiceMasListadoComponent},
     
  ]},
  {path:'jugadores',component:JugadoresComponent},
  {path:'listajuegos',component:JuegosMasListadoComponent},
  {path:'',component:PaginaPrincipalComponent},
  {path:'about',component:AboutMeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegistroJugadorComponent}, 
];
//-------------------
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RutasModule { }

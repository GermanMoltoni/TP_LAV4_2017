import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//------------------------------------------

//Servicios
 
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import {JugadorService} from './servicios/jugador/jugador.service'; 
import {JuegoService} from './servicios/juego/juego.service'; 

import {FiltrarJuegosService} from './servicios/filtrar-juegos/filtrar-juegos.service'

//Modulos Propios
import { RutasModule } from './modulos/rutas/rutas.module';
//Modulos Extras
import {HttpModule} from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';//rutas
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import {MatCardModule,MatSelectModule,MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatRadioModule} from '@angular/material/radio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PiedraPapelOtijeraComponent } from './componentes/piedra-papel-otijera/piedra-papel-otijera.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ListadoJugadoresComponent } from './componentes/listado-jugadores/listado-jugadores.component';
import { ListadoResultadosComponent } from './componentes/listado-resultados/listado-resultados.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent} from './componentes/login/login.component';
import { RegistroJugadorComponent } from './componentes/registro-jugador/registro-jugador.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuJuegosComponent } from './componentes/menu-juegos/menu-juegos.component';
import { RecoverPasswordComponent } from './componentes/recover-password/recover-password.component';
import { SimonDiceComponent } from './componentes/simon-dice/simon-dice.component';
import { CabezeraComponent } from './componentes/cabezera/cabezera.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { ResultadoPipe } from './pipes/resultado.pipe';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
 import { SexoPipe } from './pipes/sexo/sexo.pipe';
import { PiedraPapelOtijeraMasListadoComponent } from './componentes/piedra-papel-otijera-mas-listado/piedra-papel-otijera-mas-listado.component';
import { SimonDiceMasListadoComponent } from './componentes/simon-dice-mas-listado/simon-dice-mas-listado.component';
import { ListadoJuegosComponent } from './componentes/listado-juegos/listado-juegos.component';
import { JuegosMasListadoComponent } from './componentes/juegos-mas-listado/juegos-mas-listado.component';
import { PuntajePipe } from './pipes/puntaje/puntaje.pipe';
import { AnagramaMasListadoComponent } from './componentes/anagrama-mas-listado/anagrama-mas-listado.component';
   
//------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    AnagramaComponent,
    ErrorComponent,
    PiedraPapelOtijeraComponent,
    AgilidadAritmeticaComponent,
    ListadoJugadoresComponent,
    ListadoResultadosComponent,
    AdivinaElNumeroComponent,
    LoginComponent,
    RegistroJugadorComponent,
    AboutMeComponent,
    MenuPrincipalComponent,
    PaginaPrincipalComponent,
    JuegosComponent,
    MenuJuegosComponent,
    RecoverPasswordComponent,
    SimonDiceComponent,
    CabezeraComponent,
    MenuCardComponent,
    AdivinaMasListadoComponent,
    ResultadoPipe,
    AgilidadMasListadoComponent,
    JugadoresComponent, 
     SexoPipe,
     PiedraPapelOtijeraMasListadoComponent,
     SimonDiceMasListadoComponent,
     ListadoJuegosComponent,
     JuegosMasListadoComponent,
     PuntajePipe,
     AnagramaMasListadoComponent,
 
 
  ],
  imports: [
    BrowserModule,Ng2SmartTableModule,FormsModule,RutasModule,ReactiveFormsModule,HttpModule,BrowserAnimationsModule,
    MatCardModule,MatSelectModule,MatInputModule,MatButtonModule, MatCheckboxModule,MatTableModule
  ],
  providers: [MiHttpService,JugadorService,FiltrarJuegosService,JuegoService],
  bootstrap: [AppComponent],
  // Entrada de datos
   
})
export class AppModule { }

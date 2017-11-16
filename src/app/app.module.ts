import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//-------------Componentes Propios y Pipes 
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AnagramaMasListadoComponent } from './componentes/anagrama-mas-listado/anagrama-mas-listado.component';
import { CabezeraComponent } from './componentes/cabezera/cabezera.component';
import { ErrorComponent } from './componentes/error/error.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { JuegosMasListadoComponent } from './componentes/juegos-mas-listado/juegos-mas-listado.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { ListadoJuegosComponent } from './componentes/listado-juegos/listado-juegos.component';
import { ListadoJugadoresComponent } from './componentes/listado-jugadores/listado-jugadores.component';
import { ListadoResultadosComponent } from './componentes/listado-resultados/listado-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { MenuJuegosComponent } from './componentes/menu-juegos/menu-juegos.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { PiedraPapelOtijeraComponent } from './componentes/piedra-papel-otijera/piedra-papel-otijera.component';
import { PiedraPapelOtijeraMasListadoComponent } from './componentes/piedra-papel-otijera-mas-listado/piedra-papel-otijera-mas-listado.component';
import { RecoverPasswordComponent } from './componentes/recover-password/recover-password.component';
import { RegistroJugadorComponent } from './componentes/registro-jugador/registro-jugador.component';
import { SimonDiceComponent } from './componentes/simon-dice/simon-dice.component';
import { SimonDiceMasListadoComponent } from './componentes/simon-dice-mas-listado/simon-dice-mas-listado.component';
import { SexoPipe } from './pipes/sexo/sexo.pipe';
import { ResultadoPipe } from './pipes/resultado.pipe';
//---Servicios
 
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import {JugadorService} from './servicios/jugador/jugador.service'; 
import {JuegoService} from './servicios/juego/juego.service'; 
import {FiltrarJuegosService} from './servicios/filtrar-juegos/filtrar-juegos.service'
//---Modulos Propios
import { RutasModule } from './modulos/rutas/rutas.module';
//Modulos Extras 
import {HttpModule} from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';//rutas
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntajePipe } from './pipes/puntaje/puntaje.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AdivinaElNumeroComponent,
    AdivinaMasListadoComponent,
    AgilidadAritmeticaComponent,
    AgilidadMasListadoComponent,
    AnagramaComponent,
    AnagramaMasListadoComponent,
    CabezeraComponent,
    ErrorComponent,
    JuegosComponent,
    JuegosMasListadoComponent,
    JugadoresComponent,
    ListadoJuegosComponent,
    ListadoJugadoresComponent,
    ListadoResultadosComponent,
    LoginComponent,
    MenuCardComponent,
    MenuJuegosComponent,
    MenuPrincipalComponent,
    PaginaPrincipalComponent,
    PiedraPapelOtijeraComponent,
    PiedraPapelOtijeraMasListadoComponent,
    RecoverPasswordComponent,
    RegistroJugadorComponent,
    SimonDiceComponent,
    SimonDiceMasListadoComponent,
    SexoPipe,
    ResultadoPipe,
    PuntajePipe
  ],
  imports: [
    BrowserModule,Ng2SmartTableModule,FormsModule,RutasModule,ReactiveFormsModule,HttpModule,BrowserAnimationsModule,
    MatButtonModule,MatChipsModule,MatMenuModule,MatRadioModule
  ],
  providers: [MiHttpService,JugadorService,FiltrarJuegosService,JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

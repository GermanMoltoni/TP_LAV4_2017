import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//------------------------------------------
//Servicios
import { JugadoresService } from './servicios/jugadores/jugadores.service';
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import {JugadorService} from './servicios/jugador/jugador.service'; 

//Modulos Propios
import { RutasModule } from './modulos/rutas/rutas.module';
//Modulos Extras
import {HttpModule} from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';//rutas
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import {MatInputModule,MatButtonModule, MatCheckboxModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PiedraPapelOtijeraComponent } from './componentes/piedra-papel-otijera/piedra-papel-otijera.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ListadoJugadoresComponent } from './componentes/listado-jugadores/listado-jugadores.component';
import { ListadoResultadosComponent } from './componentes/listado-resultados/listado-resultados.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroJugadorComponent } from './componentes/registro-jugador/registro-jugador.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuJuegosComponent } from './componentes/menu-juegos/menu-juegos.component';
import { RecoverPasswordComponent } from './componentes/recover-password/recover-password.component';


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
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,FormsModule,RutasModule,ReactiveFormsModule,HttpModule,MatInputModule,BrowserAnimationsModule
  ],
  providers: [MiHttpService,JugadoresService,JugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

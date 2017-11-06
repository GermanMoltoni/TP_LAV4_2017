import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable'; 
import{Jugador} from '../../clases/jugador';
import { MiHttpService} from '../mi-http/mi-http.service';

@Injectable()
export class JugadoresService {
 private url:string=  "http://localhost:8080/apirestjugadores/";
 constructor(private http : MiHttpService) { }
  public TraerJugadores(ruta:string){
     //return this.http.DameUnObservable(this.url+ruta) as Observable<Jugador[]>;
  }
}
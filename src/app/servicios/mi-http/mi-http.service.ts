import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'; import 'rxjs/add/operator/map'
import { Observable }     from 'rxjs/Observable'; 

@Injectable()
export class MiHttpService{
  constructor(public http:Http) { }
  Get(path:string){
    return this.http.get(path).map(this.ExtraerDatos);
  }
  Post(path:string,data:any){
    return this.http.post(path,data,{headers:new Headers({'Content-Type': 'application/json'})}).subscribe(res=>console.log(res));
  }
  ManejadorDeError(error:Response|any){
    return error;
  }
  ExtraerDatos(respuesta:Response){
    return respuesta.json()||{};
  }
}
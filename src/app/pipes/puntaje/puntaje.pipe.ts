import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntaje'
})
export class PuntajePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == null || value == undefined)
      return true;
    return false;
  }

}

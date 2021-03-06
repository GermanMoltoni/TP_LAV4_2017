import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultado'
})
export class ResultadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value)
      return "Gano";
    return "Perdio"
  }

}

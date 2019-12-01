import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoTipovacuna = [];
    for (const tipovacuna of value ){
      if (tipovacuna.nombre.indexOf(arg) > -1){
        resultadoTipovacuna.push(tipovacuna);
      };
    };
    return resultadoTipovacuna;
  }

  transform1(value: any, arg: any): any {
    const resultadoPropietario = [];
    for (const propietario of value ){
      if (propietario.nombre.indexOf(arg) > -1){
        resultadoPropietario.push(propietario);
      };
    };
    return resultadoPropietario;
  }

}

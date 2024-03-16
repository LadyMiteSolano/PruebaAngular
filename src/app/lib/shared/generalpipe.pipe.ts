import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalpipe',
  pure: false
})
export class GeneralpipePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    if(value > 1000){
      return 500;
    }
    return value;
  }

  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
}

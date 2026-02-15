import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abreviar',
  standalone: false
})
export class AbreviarPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): unknown {
    value = value[0] + value[1] + value[2] + "...";
    return value;
  }

}

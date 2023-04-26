import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowUp'
})
export class ArrowUpPipe implements PipeTransform {

  transform(value:string): string {
    return value + ' ▲';
  }

}

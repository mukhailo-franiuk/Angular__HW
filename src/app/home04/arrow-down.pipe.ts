import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowDown'
})
export class ArrowDownPipe implements PipeTransform {

  transform(value: string): string {
    return value + '▼';
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumbers } from './home04.component';

@Pipe({
  name: 'sortN'
})
export class SortNPipe implements PipeTransform {

  transform(arrayNumbers:PhoneNumbers[],strSortN:string): PhoneNumbers[] {
    if(!arrayNumbers) return [];
    if(!arrayNumbers) return arrayNumbers;
    if(strSortN === 'down-number') {
     return arrayNumbers.sort((a,b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
    }else {
      return arrayNumbers.sort((a,b) => (a.number < b.number) ? 1 : ((a.number > b.number) ? -1 : 0))
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumbers } from './home04.component';

@Pipe({
  name: 'sortL'
})
export class SortLPipe implements PipeTransform {

  transform(arrayNumbers:PhoneNumbers[],strSortL:string): PhoneNumbers[] {
    if(!arrayNumbers) return [];
    if(!arrayNumbers) return arrayNumbers;
    if(strSortL === 'down-last-name') {
     return arrayNumbers.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
    }else {
      return arrayNumbers.sort((a,b) => (a.lastName < b.lastName) ? 1 : ((a.lastName > b.lastName) ? -1 : 0))
    }
  }

}

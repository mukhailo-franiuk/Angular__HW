import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumbers } from './home04.component';

@Pipe({
  name: 'sort'
})
export class SortPipeFirstName implements PipeTransform {

  transform(arrayNumbers:PhoneNumbers[],strSort:string):PhoneNumbers[] {
    if(!arrayNumbers) return [];
    if(!arrayNumbers) return arrayNumbers;
    if(strSort === 'down-first-name') {
     return arrayNumbers.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    }else {
      return arrayNumbers.sort((a,b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0))
    }
  }
}
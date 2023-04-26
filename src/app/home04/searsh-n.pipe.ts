import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumbers } from './home04.component';

@Pipe({
  name: 'searshN'
})
export class SearshNPipe implements PipeTransform {

  transform(numbersPhone: PhoneNumbers[], searshStrN:string ): PhoneNumbers[] {
    if(!numbersPhone) return [];
    if(!searshStrN) return numbersPhone;
    return numbersPhone.filter(num => num.number.toLowerCase().includes(searshStrN.toLowerCase()));
  }

}

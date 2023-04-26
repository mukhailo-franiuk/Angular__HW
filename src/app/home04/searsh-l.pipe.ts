import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumbers } from './home04.component';

@Pipe({
  name: 'searshL'
})
export class SearshLPipe implements PipeTransform {

  transform(numbersPhone: PhoneNumbers[], searshStrL:string ): PhoneNumbers[] {
    if(!numbersPhone) return [];
    if(!searshStrL) return numbersPhone;
    return numbersPhone.filter(num => num.lastName.toLowerCase().includes(searshStrL.toLowerCase()));
  }

}

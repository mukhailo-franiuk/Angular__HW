import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumbers } from './home04.component';

@Pipe({
  name: 'searshF'
})
export class SearshPipe implements PipeTransform {

  transform(numbersPhone: PhoneNumbers[], searshStr:string ): PhoneNumbers[] {
    if(!numbersPhone) return [];
    if(!searshStr) return numbersPhone;
    return numbersPhone.filter(num => num.firstName.toLowerCase().includes(searshStr.toLowerCase()));
  }

}

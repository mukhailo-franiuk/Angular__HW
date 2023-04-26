import { Component } from '@angular/core';

@Component({
  selector: 'app-home04',
  templateUrl: './home04.component.html',
  styleUrls: ['./home04.component.scss']
})
export class Home04Component {
  [x: string]: any;
  public searshStrF!: string;
  public searshStrL!: string;
  public searshStrN!: string;
  // classes options
  public class01 = 'save-container';
  // --------------------------------------
  // Inputs add new numbers variables
  public fName!: string;
  public subFName!: string;

  public lName!: string;
  public subLName!: string;

  public number!: string;
  public subNumber!: string;
  // -------------------------------------
  public editStatus = false;
  public editIndex!: number;
  // ---------------------
  public dStatus!: string;


  // Butttons
  public firstName = 'First name';
  public lastName = 'Last name';
  public numbers = 'Number';
  public statusButtonDown = 'display:none';
  public statusButtonUp = 'display:none';
  public phoneBook = [
    {
      firstName: 'Anton',
      lastName: 'Antonov',
      number: '0976735107'
    },
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0976735000'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0930035000'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      number: '0736735000'
    }
  ];
  constructor() { }

  public showInput01 = 'display:block';
  public showInput02 = 'display:none';
  public showInput03 = 'display:none';
  public showInput04 = 'display:none';

  // Sort buttons 01
  public strSort = 'down-first-name';
  showSort(str: string): void {
    // 01
    this.dStatus = 'display:none';
    this.statusButtonDown = 'display:block'
    // 02
    this.dStatusL = 'display:block';
    this.statusButtonUpL = 'display:none';
    this.statusButtonDownL = 'display:none';
    // 03
    this.dStatusN = 'display:block';
    this.statusButtonDownN = 'display:none';
    this.statusButtonUpN = 'display:none';
    // inp
    this.showInput01 = 'display:none';
    this.showInput02 = 'display:block';
    this.showInput03 = 'display:none';
    this.showInput04 = 'display:none';
    this.searshStrF = '';
    this.searshStrL = '';
    this.searshStrN = '';
    this.strSort = str;
  }
  sortListDown(strSort: string): void {
    this.strSort = strSort;
    this.statusButtonDown = 'display:none';
    this.statusButtonUp = 'display:block';
  }
  sortListUp(strSort: string): void {
    this.strSort = strSort;
    this.statusButtonUp = 'display:none';
    this.statusButtonDown = 'display:block';
  }
  // -------------------------------------
  // Sort buttons 02
  public strSortL = 'down-last-name';
  public statusButtonDownL = 'display:none';
  public statusButtonUpL = 'display:none';
  public dStatusL!: string;
  showSortLast(str: string): void {
    // 01
    this.dStatus = 'display:block';
    this.statusButtonDown = 'display:none';
    this.statusButtonUp = 'display:none';
    // 02
    this.dStatusL = 'display:none';
    this.statusButtonDownL = 'display:block';
    // 03
    this.dStatusN = 'display:block';
    this.statusButtonDownN = 'display:none';
    this.statusButtonUpN = 'display:none';
     // inp
     this.showInput01 = 'display:none';
     this.showInput02 = 'display:none';
     this.showInput03 = 'display:block';
     this.showInput04 = 'display:none';
     this.searshStrF = '';
     this.searshStrL = '';
     this.searshStrN = '';

    this.strSortL = str;
  }
  sortListDownLast(str: string): void {
    this.strSortL = str;
    this.statusButtonDownL = 'display:none';
    this.statusButtonUpL = 'display:block';
  }
  sortListUpLast(str: string): void {
    this.strSortL = str;
    this.statusButtonUpL = 'display:none';
    this.statusButtonDownL = 'display:block';
  }
  // ---------------------------------------
  // Sort buttons 03
  public strSortN = 'down-number';
  public statusButtonDownN = 'display:none';
  public statusButtonUpN = 'display:none';
  public dStatusN!: string;
  showSortNumber(str: string): void {
    // 01
    this.dStatus = 'display:block';
    this.statusButtonUp = 'display:none';
    this.statusButtonDown = 'display:none';
    // 02
    this.dStatusL = 'display:block';
    this.statusButtonDownL = 'display:none'
    this.statusButtonUpL = 'display:none';
    // 03
    this.dStatusN = 'display:none';
    this.statusButtonDownN = 'display:none';
    this.statusButtonDownN = 'display:block'
    // inp
    this.showInput01 = 'display:none';
    this.showInput02 = 'display:none';
    this.showInput03 = 'display:none';
    this.showInput04 = 'display:block';
    this.searshStrF = '';
    this.searshStrL = '';
    this.searshStrN = '';

    this.strSortN = str;
  }
  sortListDownNumber(str: string): void {
    this.strSortN = str;
    this.statusButtonDownN = 'display:none';
    this.statusButtonUpN = 'display:block';


  }
  sortListUpNumber(str: string): void {
    this.strSortN = str;
    this.statusButtonUpN = 'display:none';
    this.statusButtonDownN = 'display:block';
  }
  showAddNumber(): void {
    this.class01 = 'save-container-action';
  }
  saveNewNumber(): void {
    this.class01 = 'save-container';
    if (this.fName === undefined) {
      this.fName = 'Guest';
      this.subFName = this.fName;
    }
    else if (this.fName === '') {
      this.fName = 'Guest';
      this.subFName = this.fName;
    }
    else {
      this.subFName = this.fName;
    }
    if (this.lName === undefined) {
      this.lName = 'Guestovysh';
      this.subLName = this.lName;
    }
    else if (this.lName === '') {
      this.lName = 'Guestovysh';
      this.subLName = this.lName;
    }
    else {
      this.subLName = this.lName;
    }
    if (this.number === undefined) {
      this.number = 'Enter number ?';
      this.subNumber = this.number;
    } else if (this.number === '') {
      this.number = 'Enter number ?';
      this.subNumber = this.number;
    } else {
      this.subNumber = this.number;
    }
    console.log(this.fName, this.lName, this.number);

    this.phoneBook.push({
      firstName: this.subFName,
      lastName: this.subLName,
      number: this.subNumber
    });


    this.fName = '';
    this.lName = '';
    this.number = '';
  }

  editNumber(index: number): void {
    this.class01 = 'save-container-action';
    this.fName = this.phoneBook[index].firstName;
    this.lName = this.phoneBook[index].lastName;
    this.number = this.phoneBook[index].number;
    this.editIndex = index;
    this.editStatus = true;
  }
  updateNunber(): void {
    this.class01 = 'save-container';
    this.subFName = this.fName;
    this.subLName = this.lName;
    this.subNumber = this.number;
    this.phoneBook[this.editIndex] = {
      firstName: this.subFName,
      lastName: this.subLName,
      number: this.subNumber
    }
    this.fName = '';
    this.lName = '';
    this.number = '';
  }
  deleteNumber(index: number): void {
    this.phoneBook.splice(index, 1);
  }
}

export interface PhoneNumbers {
  firstName: string
  lastName: string,
  number: string
}

// ▲    ▼
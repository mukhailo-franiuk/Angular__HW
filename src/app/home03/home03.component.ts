import { Component } from '@angular/core';

@Component({
  selector: 'app-home03',
  templateUrl: './home03.component.html',
  styleUrls: ['./home03.component.scss']
})
export class Home03Component {
  public inputValue!: string;
  public some!:string;
  public subInp!:string;
  public style:string = '';
  public myID!:number;
  public str!:string;
  public tasksList = [
    {
      task : 'HTML',
      status: 'DONE',
      check : true,
      class: 'list-tasks',
      style:'save-block',
      disabledEdit : true,
      disabledDel: false
    },
    {
      task : 'CSS',
      status : 'DONE',
      check : true,
      class: 'list-tasks',
      style:'save-block',
      disabledEdit : true,
      disabledDel : false
    },
    {
      task : 'TypeScript',
      status : 'in Progress',
      check : false,
      class : 'not-work',
      style:'save-block',
      disabledEdit : false,
      disabledDel : true
    },
    {
      task : 'JavaScript',
      status : 'in Progress',
      check : false,
      class : 'not-work',
      style:'save-block',
      disabledEdit : false,
      disabledDel : true
    },
    {
      task : 'React',
      status : 'in Progress',
      check : false,
      class : 'not-work',
      style:'save-block',
      disabledEdit : false,
      disabledDel : true
    }
  ]
  public task = {
    task: '',
    status: 'in Progress',
    check: false,
    class: 'not-work',
    style:'save-block',
    disabledEdit : false,
    disabledDel: false
  }
  constructor() { }
add():void {
this.some = this.inputValue
this.inputValue = '';
  this.tasksList.push({task : this.some,
  status : 'in Progress',
  check : false,
  class : 'not-work',
  style:'save-block',
  disabledEdit : false,
  disabledDel : true})
}

showId(data:number):void {
  this.myID = data;
  this.style = 'open-save-block';
  for (let i = 0; i < this.tasksList.length; i++) {
    if(this.tasksList[this.myID]){
      this.subInp = this.tasksList[this.myID].task;
   }
}
}
saveChanged():void {
  this.str = this.subInp;
    for (let i = 0; i < this.tasksList.length; i++) {
      if(this.tasksList[this.myID]){
        this.tasksList[this.myID].task = this.str;
        this.subInp = '';
      }
      
    }
    this.style = 'save-block';
}
}

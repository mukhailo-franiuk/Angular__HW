import { Component , Input , Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() newArray!:any;
@Output() redaktText = new  EventEmitter();
@Output() redaktId = new  EventEmitter();
@Output() redaktStyle = new  EventEmitter();

constructor(){}
checkOnOff(index:number):void {
    if(this.newArray[index].check == true) {
      this.newArray[index].status = 'in Progress';
      this.newArray[index].class = 'not-work';
      this.newArray[index].disabledEdit = false;
      this.newArray[index].disabledDel = false;
      this.newArray[index].check = false;
    }else {
      this.newArray[index].status = 'DONE';
      this.newArray[index].class = 'list-tasks';
      this.newArray[index].disabledEdit = true;
      this.newArray[index].disabledDel = false;
      this.newArray[index].check = true;
    }
}
deleteTask(index:number){
  this.newArray.splice(index , 1);
}
editer(index:number):void {
  this.redaktId.emit(index);
}
}

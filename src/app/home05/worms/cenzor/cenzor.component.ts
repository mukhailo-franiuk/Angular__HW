import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public badWords!: string;
  public subBadWords!: string;
  public arrayBadWords:Array<string> = [];
  public textarea!: string;
  public subTextarea!: string;
  public textCenz!:string;

  constructor() { }
  addBadWords(): void {
    this.subBadWords = this.badWords;
    this.arrayBadWords.push(this.subBadWords);
    this.badWords = '';

  }
  resetBadWords(): void {
    this.arrayBadWords = [];
    this.badWords = '';
  }
  cenzor() {
    for (let i = 0 ;i < this.arrayBadWords.length;i++) {
      this.subTextarea = this.textarea.replace(this.arrayBadWords[i],'*'.repeat(this.arrayBadWords[i].length));
      this.textarea = this.subTextarea
    }  
    return this.textarea;
  }
}

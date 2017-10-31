import { Component, OnInit, ElementRef } from '@angular/core';
import { UserInfo } from './user-info';

@Component({ 
  selector: 'app-component',
  templateUrl: 'app/app-component.html'
})
export class AppComponent  implements  OnInit {
  
  user: Array<UserInfo> = [];
  checked: boolean = false;
  counter: number;
  constructor(private ele: ElementRef) {

  }

  ngOnInit() {
    console.log(this.ele.nativeElement);
    this.counter = 1;
   
    this.user.push({
      Id: this.counter,
      Name:  ' ',
      Mail: ' ',
      Mobile: ' '

    });

  }

  AddRow () {

    this.counter ++;

    this.user.push({
      Id: this.counter,
      Name:  ' ',
      Mail: ' ',
      Mobile: ' '

    });
  }
 DeleteRow (u: UserInfo) {
  
  if (this.checked) {
    var index = this.user.indexOf(u);
    this.user.splice(index,1);
  } else {
    console.log('select the row');
  }
   
  }

  SelectedEle (e:any) {

    if (e.target.checked) {
      this.checked = true;
  }


  
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = '';
  // We do not need to declare types on items whose type is inferred trivially.
  // We can also hard code a default value here.

  constructor() { }

  ngOnInit(): void {
  }

countClick() {
  this.clickCounter += 1;
}

setClasses() {
  let myClasses = {
    active:    this.clickCounter > 4,
    notactive: this.clickCounter <= 4,
  }
  return myClasses;
}

}



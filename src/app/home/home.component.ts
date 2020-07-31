import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = 'Steve'; 
  // We do not need to declare types on items whose type is inferred trivially.
  // We can also hard code a default value here.

  constructor() { }

  ngOnInit(): void {
  }

countClick() {
  this.clickCounter += 1;
}
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: object;

  constructor(private httpList: HttpService) { }

  ngOnInit(): void {
    this.httpList.getBeer().subscribe(data => {
      this.brews = data;
    });
  }

}

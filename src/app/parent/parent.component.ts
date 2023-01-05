import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentItem = 'Television';
  //Note: Sharing a function/method can be done by using a ViewChild

  constructor() { }

  ngOnInit(): void {
  }
}

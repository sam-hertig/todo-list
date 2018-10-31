import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title : string;

  constructor() {
    this.title = 'I Love Angular';
  }

  ngOnInit() {
    this.changeTitle('My First Angular Apppppp');;
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}

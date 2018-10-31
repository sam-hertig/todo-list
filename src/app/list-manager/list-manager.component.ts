import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[];

  // todoListService: TodoListService; //implicit!

  constructor(private todoListService: TodoListService) {
    // this.todoListService = todoListService; //implicit!
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoList.push({ title }); //ES6 Object Property Value Shorthand
  }

}

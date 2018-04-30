import { Component, OnInit } from '@angular/core';
import { TodoPropertyChange } from './TodoPropertyChange';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: any[];
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.find().subscribe(data => this.todoList = data);
  }
}

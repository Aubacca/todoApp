import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoPropertyChange } from './TodoPropertyChange';
import { TodoService } from '../../feature/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private _todoList: Todo[];
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.find().subscribe(data => this._todoList = data);
  }

  get todoList(): Todo[] {
    return this._todoList;
  }

  deleteItem(todo: Todo) {
    console.log('todo: ', todo);
    this._todoService.delete(todo).subscribe(deletedTodo => {
      console.log('todo deleted: ', deletedTodo);
      this._todoService.find().subscribe(data => this._todoList = data);
    });
  }
}

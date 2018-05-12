import { Component, OnInit } from '@angular/core';

import { TodoService } from '@app/features/services/todo.service';
import { Todo } from '@app/features/models/todo.model';
import { TodoPropertyChange } from './TodoPropertyChange';

@Component({
  selector: 'app-todo-list',
  template: `
  <app-todo-list-view
  [todoList]="todoList"
  (deleteTodo)="onDeleteTodo($event)"></app-todo-list-view>`,
  styleUrls: []
})
export class TodoListComponent implements OnInit {
  private _todoList: Todo[];

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.find().subscribe(data => (this._todoList = data));
  }

  get todoList(): Todo[] {
    return this._todoList;
  }

  onDeleteTodo(todo: Todo) {
    console.log('onDeleteTodo>todo: ', todo);
    this._todoService.delete(todo).subscribe(deletedTodo => {
      console.log('todo successfully deleted: ', deletedTodo);
      this._todoService.find().subscribe(data => (this._todoList = data));
    });
  }
}

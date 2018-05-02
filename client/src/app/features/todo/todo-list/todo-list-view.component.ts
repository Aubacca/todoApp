import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '@app/features/models/todo.model';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent implements OnInit {
  @Input() todoList: Todo[];
  @Output() deleteTodo = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  deleteItem(todo: Todo) {
    console.log('deleteItem>todo: ', todo);
    this.deleteTodo.emit(todo);
  }
}

import { Component, OnInit } from '@angular/core';

import { TodoService } from '@app/features/services/todo.service';
import { Todo } from '@app/features/models/todo.model';
import { TodoPropertyChange } from './TodoPropertyChange';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

@Component({
  selector: 'app-todo-list',
  template: `
  <div *ngIf="!((todo$ | async)?.length)">
  No Todo defined so far. Add a new one to get a list.
  </div>
  <ul>
    <li *ngFor="let todo of (todo$ | async)">{{todo.todo}} / {{todo.remark}}: public: {{todo.public}} / done: {{todo.done}}</li>
  </ul>

  <app-todo-list-view
  [todoList]="todoList"
  (deleteTodo)="onDeleteTodo($event)"></app-todo-list-view>`,
  styleUrls: []
})
export class TodoListComponent implements OnInit {
  private _todoList: Todo[];
  private _todo$: Observable<Todo[]>;

  constructor(
    private _todoService: TodoService,
    private store: Store<fromStore.FeatureState>
  ) {}

  ngOnInit() {
    this._todoService.find().subscribe(data => (this._todoList = data));

    this._todo$ = this.store.select(fromStore.getAllTodos);
  }

  get todo$(): Observable<Todo[]> {
    return this._todo$;
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

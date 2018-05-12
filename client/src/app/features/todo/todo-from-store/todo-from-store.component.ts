import { Component, OnInit } from '@angular/core';

import { Todo } from '@app/features/models/todo.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

@Component({
  selector: 'app-todo-from-store',
  template: `
  <div *ngIf="!((todo$ | async)?.length)">
  No Todo defined so far via store. Add a new one to get a list.
  </div>
  <ul>
    <li *ngFor="let todo of (todo$ | async)"><h3>{{todo.todo}}</h3><i>Remark: {{todo.remark}}</i>
    <br>
    public: {{todo.public}} / done: {{todo.done}}</li>
  </ul>
`,
  styleUrls: []
})
export class TodoFromStoreComponent implements OnInit {
  private _todo$: Observable<Todo[]>;

  constructor(private store: Store<fromStore.FeatureState>) {}

  ngOnInit() {
    this._todo$ = this.store.select(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.LoadTodos());
  }

  get todo$(): Observable<Todo[]> {
    return this._todo$;
  }
}

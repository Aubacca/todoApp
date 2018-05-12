import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as todoActions from '../actions/todo.action';
import * as fromServices from '@features/services';

@Injectable()
export class TodoEffects {
  constructor(
    private _action$: Actions,
    private _todoService: fromServices.TodoService
  ) {}

  @Effect()
  loadTodos$ = this._action$.ofType(todoActions.LOAD_TODOS).pipe(
    switchMap(() => {
      return this._todoService
        .getTodo()
        .pipe(
          map(todos => new todoActions.LoadTodosSuccess(todos)),
          catchError(error => of(new todoActions.LoadTodosFail(error)))
        );
    })
  );
}

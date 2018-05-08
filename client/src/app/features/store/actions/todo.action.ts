import { Action } from '@ngrx/store';

import { Todo } from '@features/models/todo.model';

// Load todos.
export const LOAD_TODOS = '[Features] Load Todos';
export const LOAD_TODOS_FAIL = '[Features] Load Todos Faii';
export const LOAD_TODOS_SUCCESS = '[Features] Load Todos Success';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

// action types.
export type TodoActions = LoadTodos | LoadTodosFail | LoadTodosSuccess;

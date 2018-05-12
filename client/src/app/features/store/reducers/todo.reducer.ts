import { Todo } from '@features/models/todo.model';
import * as fromTodoActions from '../actions/todo.action';

export interface TodoState {
  data: Todo[];
  loaded: boolean;
  loading: boolean;
}

// Initial state.
export const initialState: TodoState = {
  data: [],
  loaded: false,
  loading: false
};

// Todo reducer.
export function reducer(
  state = initialState,
  action: fromTodoActions.TodoActions
): TodoState {
  switch (action.type) {
    case fromTodoActions.LOAD_TODOS:
      return {
        ...state,
        loaded: false,
        loading: true
      };

    case fromTodoActions.LOAD_TODOS_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        data
      };

    case fromTodoActions.LOAD_TODOS_FAIL:
      return {
        data: [],
        loaded: false,
        loading: false
      };
  }

  return state;
}

export const getTodoLoading = (state: TodoState) => state.loading;
export const getTodoLoaded = (state: TodoState) => state.loaded;
export const getTodo = (state: TodoState) => state.data;

import { Todo } from '@features/models/todo.model';
import * as fromTodoActions from '../actions/todo.action';

export interface TodoState {
  data: Todo[];
  loaded: boolean;
  loading: boolean;
}

// Initial state.
export const initialState: TodoState = {
  data: [
    {
      _id: '4AB31382-0D0A-0D14-6F76-1B7CD8C79156',
      todo: 'non, hendrerit id, ante. Nunc mauris',
      public: false,
      done: false,
      remark: 'ipsum dolor sit amet, consectetuer adipiscing'
    },
    {
      _id: '5E3FEBCF-F29B-6AC8-AB51-26EEA97B6930',
      todo: 'tellus non',
      public: true,
      done: false,
      remark: 'auctor odio'
    }
  ],
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
      return {
        ...state,
        loaded: true,
        loading: false
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
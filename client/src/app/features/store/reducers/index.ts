import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromTodoState from './todo.reducer';

// Feature interface.
export interface FeatureState {
  todos: fromTodoState.TodoState;
}

// Feature reducer.
export const reducers: ActionReducerMap<FeatureState> = {
  todos: fromTodoState.reducer
};

// Get feature state.
export const getFeaturesState = createFeatureSelector<FeatureState>('features');

// Get Todo state.
export const getTodoState = createSelector(
  getFeaturesState,
  (state: FeatureState) => state.todos
);

// Get Todo state elements.
export const getAllTodos = createSelector(getTodoState, fromTodoState.getTodo);
export const getTodosLoaded = createSelector(getTodoState, fromTodoState.getTodoLoaded);
export const getTodosLoading = createSelector(getTodoState, fromTodoState.getTodoLoading);

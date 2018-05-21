import {
  ActionReducerMap,
  createFeatureSelector
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

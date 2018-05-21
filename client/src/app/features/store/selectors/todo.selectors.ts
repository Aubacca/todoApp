import { createSelector } from '@ngrx/store';

import * as fromFeature from "@features/store/reducers";
import * as fromTodo from "@features/store/reducers/todo.reducer";

// Get Todo state.
export const getTodoState = createSelector(
  fromFeature.getFeaturesState,
    (state: fromFeature.FeatureState) => state.todos
  );
  
  // Get Todo state elements.
  export const getAllTodos = createSelector(getTodoState, fromTodo.getTodo);
  export const getTodosLoaded = createSelector(
    getTodoState,
    fromTodo.getTodoLoaded
  );
  export const getTodosLoading = createSelector(
    getTodoState,
    fromTodo.getTodoLoading
  );
  
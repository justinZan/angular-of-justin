import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { State, todosFeatureKey } from '../reducers/todos.reducer';

export const selectTodo = createFeatureSelector<AppState, State>(todosFeatureKey);
export const selectTodos = createSelector(selectTodo, state => state.todoList);

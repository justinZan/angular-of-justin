import { addTodo, deleteTodo } from './../actions/todos.actions';
import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';


export const todosFeatureKey = 'todos';

export interface Todo {
  id: string;
  title: string;
}


export interface State {
  todoList: Todo[];
}

export const initialState: State = {
  todoList: []
};

export const reducer = createReducer(
  initialState,
  on(addTodo, (state, action) => ({
    ...state,
    todoList: [
      ...state.todoList, {
        id: uuidv4(),
        title: action.title
      }
    ]
  })),
  on(deleteTodo, (state, action) => {
    const newState: State = JSON.parse(JSON.stringify(state));
    const index = newState.todoList.findIndex(todo => todo.id === action.id);
    newState.todoList.splice(index, 1);
    return newState;
  })
);

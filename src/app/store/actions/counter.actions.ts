import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  'increment', props<{ count: number }>()
);


export const decrement = createAction(
  'decrement'
);

export const asyncIncrement = createAction(
  'asyncIncrement'
);


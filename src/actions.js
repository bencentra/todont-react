export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const FILTER_STATES = {
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  HIDE_COMPLETED: 'HIDE_COMPLETED',
};

export function addTodo(text, key = Date.now()) {
  return { type: ADD_TODO, text, key };
}

export function toggleTodo(key) {
  return { type: TOGGLE_TODO, key };
}

export function toggleCompleted(filter) {
  return { type: TOGGLE_COMPLETED, filter };
}
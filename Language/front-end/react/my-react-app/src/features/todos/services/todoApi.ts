import type { Todo } from '../types';

export async function getTodos(): Promise<Todo[]> {
  return Promise.resolve([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: true },
  ]);
}

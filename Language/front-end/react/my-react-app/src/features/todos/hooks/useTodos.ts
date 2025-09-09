import { useEffect, useState } from 'react';
import { getTodos } from '../services/todoApi';
import type { Todo } from '../types';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return { todos };
}

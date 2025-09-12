import React from 'react';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.title}</span>
    </div>
  );
}

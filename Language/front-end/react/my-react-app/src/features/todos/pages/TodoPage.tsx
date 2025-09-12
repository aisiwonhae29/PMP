import React from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "../components/TodoItem";

export function TodoPage() {
	const { todos } = useTodos();
	console.log("TodoPage 렌더링");
	return (
		<div>
			<h1>Todo List</h1>
			<div className="text-3xl font-bold text-red-500">
				<h1>✅ Todo Pa11ssge! (빨간색이면 Tailwind 작동, 검은색이면 미작동)</h1>
			</div>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import { TodoPage } from "../features/todos/pages/TodoPage";
import { ZestPage } from "../features/todos/pages/Zest"; 
import { ListPage } from "../features/test1/ListPage";
import { IndexPage } from "../features/index";

export function AppRoutes() {
	return (
		<Routes>
			{/* path: url, elements: rendering page */}
			<Route path="/zest" element={<ZestPage />} />
			<Route path="/todos" element={<TodoPage />} />
			<Route path="/" element={<IndexPage />} />
			<Route path="/test" element={<ListPage />} />
			{/* Add more routes as needed */}
		</Routes>
	);
}

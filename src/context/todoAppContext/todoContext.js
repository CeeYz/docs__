import { createContext, useContext } from "react";

export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: "Todo Content",
			completed: false,
		},
	],
	addTodo: (todo) => { },
	// updateTodo is to add new todo, so we give id to check for existing
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleComplete: (id) => {},
});

export const useTodo = () => {
	return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;

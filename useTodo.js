import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initializer = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {

	const [todos, dispatch] = useReducer(
		todoReducer,
		[],
		initializer
	);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		console.log("Se crea un nuevo todo : ");
		console.log(todo);

		const action = {
			type: `[TODO] Add Todo`,
			payload: todo,
		};
		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		console.log(id);
		const action = {
			type: `[TODO] Remove Todo`,
			payload: id,
		};
		dispatch(action);
	};

	const handleToggleTodo = (id) => {
		console.log({ id });
		const action = {
			type: `[TODO] Toggle Todo`,
			payload: id,
		};
		dispatch(action);
	};

	const todosCount = todos.length

	const pendingTodosCount = todos.filter(todo => !todo.done).length


	return { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo };
};

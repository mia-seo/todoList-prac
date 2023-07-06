import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  TodoResponse,
  UpdateRequest,
  updateTodo,
} from "../api/TodoApi";

const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: Props) {
  const [todos, setTodos] = useState<TodoResponse[] | []>([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  const todoCreater = async (todo: string) => {
    const newTodo = await createTodo(todo);
    setTodos((todos) => [newTodo, ...todos]);
  };

  const todoUpdater = async (id: number, newTodoReq: UpdateRequest) => {
    const newTodo = await updateTodo(id, newTodoReq);
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return newTodo;
        }
        return todo;
      })
    );
  };

  const todoDeleter = (id: number) => {
    deleteTodo(id);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, todoCreater, todoUpdater, todoDeleter }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => {
  const todoContext = useContext(TodoContext);
  if (todoContext) return todoContext;
  else {
    throw new Error("잘못된 접근입니다.");
  }
};

type TodoContextType = {
  todos: [] | TodoResponse[];
  todoCreater: (todo: string) => Promise<void>;
  todoUpdater: (id: number, newTodoReq: UpdateRequest) => Promise<void>;
  todoDeleter: (id: number) => void;
};

type Props = {
  children: React.ReactNode;
};

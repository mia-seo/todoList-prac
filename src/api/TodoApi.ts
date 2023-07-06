import { instance } from "./index";

export type TodoResponse = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type UpdateRequest = {
  todo: string;
  isCompleted: boolean;
};

export const createTodo = async (todo: string): Promise<TodoResponse> => {
  const newTodo = await instance.post("/todos", { todo });
  return newTodo.data;
};

export const getTodos = async (): Promise<TodoResponse[]> => {
  const todos = await instance.get("/todos");
  return todos.data;
};

export const updateTodo = async (
  id: number,
  newTodoReq: UpdateRequest
): Promise<TodoResponse> => {
  const newTodo = await instance.put(`/todos/${id}`, {
    todo: newTodoReq.todo,
    isCompleted: newTodoReq.isCompleted,
  });
  return newTodo.data;
};

export const deleteTodo = (id: number) => {
  instance.delete(`/todos/${id}`);
};

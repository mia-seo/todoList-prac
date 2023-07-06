import { useTodo } from "../context/todoContext";
import TodoItem from "./TodoItem";

export default function TodoContainer() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

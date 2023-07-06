import TodoContainer from "../components/TodoContainer";
import TodoCreater from "../components/TodoCreater";
import { TodoProvider } from "../context/todoContext";

export default function TodoList() {
  return (
    <main>
      <TodoProvider>
        <TodoContainer />
        <TodoCreater />
      </TodoProvider>
    </main>
  );
}

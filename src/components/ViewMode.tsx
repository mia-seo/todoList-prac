import React from "react";
import { TodoResponse } from "../api/TodoApi";
import { useTodo } from "../context/todoContext";

type Props = {
  todo: TodoResponse;
  onModeChange: () => void;
};

export default function ViewMode({
  todo: { id, isCompleted, todo },
  onModeChange,
}: Props) {
  const { todoUpdater, todoDeleter } = useTodo();

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    todoUpdater(id, { todo, isCompleted: e.target.checked });
  };

  const handleDelete = () => todoDeleter(id);

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
      <p>{todo}</p>
      <button onClick={onModeChange}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

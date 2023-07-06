import React, { useState } from "react";
import { TodoResponse } from "../api/TodoApi";
import { useTodo } from "../context/todoContext";

type Props = {
  todo: TodoResponse;
  onModeChange: () => void;
};

export default function EditMode({
  todo: { id, todo, isCompleted },
  onModeChange,
}: Props) {
  const [checked, setChecked] = useState(isCompleted);
  const [text, setText] = useState(todo);
  const { todoUpdater } = useTodo();

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmitChanged = () => {
    todoUpdater(id, { todo: text, isCompleted: checked });
    cancelEdit();
  };

  const cancelEdit = () => {
    setText("");
    onModeChange();
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={handleCheckChange} />
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleSubmitChanged}>제출</button>
      <button onClick={cancelEdit}>취소</button>
    </li>
  );
}

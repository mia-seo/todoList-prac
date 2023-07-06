import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

export default function TodoCreater() {
  const [text, setText] = useState("");
  const { todoCreater } = useTodo();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoCreater(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        type="text"
        onChange={handleInputChange}
        value={text}
      />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}

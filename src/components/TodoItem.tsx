import { useState } from "react";
import { TodoResponse } from "../api/TodoApi";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

type Props = {
  todo: TodoResponse;
};

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const changeMode = () => setIsEditing(!isEditing);

  return (
    <ul>
      {isEditing && <EditMode todo={todo} onModeChange={changeMode} />}
      {!isEditing && <ViewMode todo={todo} onModeChange={changeMode} />}
    </ul>
  );
}

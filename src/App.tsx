import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoList from "./pages/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute to="/todo">
        <SignIn />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute to="/todo">
        <SignIn />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute to="/todo">
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute to="/signin">
        <TodoList />
      </ProtectedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

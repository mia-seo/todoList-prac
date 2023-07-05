import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoList from "./pages/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <SignIn />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute>
        <SignIn />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute>
        <TodoList />
      </ProtectedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter } from 'react-router-dom';
import { TodoApp } from '../screens/TodoApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoApp />,
  },
]);

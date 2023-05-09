import { useRecoilState } from 'recoil';
import { v4 as uuidV4 } from 'uuid';

import { todosState } from '../../atoms/todos';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';
import { NewTodoDto } from '../../domain/dtos/new-todo.dto';
import { TodoModel } from '../../domain/models/todo';

export function TodoApp() {
  const [todos, setTodos] = useRecoilState<Array<TodoModel>>(todosState);

  const handleAddTodo = (newTodo: NewTodoDto) => {
    const date = new Date().toISOString();

    setTodos((prev) => [
      {
        ...newTodo,
        id: uuidV4(),
        createdAt: date,
        updatedAt: date,
        doneAt: null,
      },
      ...prev,
    ]);
  };

  const handleChangeTodo = (id: string) => {
    const date = new Date().toISOString();

    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          doneAt: todo.doneAt == null ? date : null,
        };
      })
    );
  };

  const handleRemoveTodo = (id: string) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  return (
    <section
      className={
        'w-screen h-screen p-20 bg-white-100 flex flex-col items-center justify-start'
      }
    >
      <div className={'w-3/5 flex flex-col items-center'}>
        <h1 className="text-3xl font-semibold mb-4">
          ✅ ToDo App
        </h1>

        <TodoForm addTodo={handleAddTodo} />

        <TodoList
          todos={todos}
          toggleTodo={handleChangeTodo}
          removeTodo={handleRemoveTodo}
        />
      </div>
    </section>
  );
}

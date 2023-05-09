import { useMemo } from 'react';
import { TodoModel } from '../../domain/models/todo';
import { TodoItem } from '../TodoItem';

interface ITodoList {
  todos: Array<TodoModel>;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export function TodoList({ todos, toggleTodo, removeTodo }: ITodoList) {
  const amountDone = useMemo(
    () => todos.reduce((prev, curr) => prev + (curr.doneAt != null ? 1 : 0), 0),
    [todos]
  );

  return (
    <section className={'w-full flex flex-col gap-4 items-end'}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggle={() => toggleTodo(todo.id)}
          remove={() => removeTodo(todo.id)}
        />
      ))}
      <p className={'text-xl font-semibold dark:text-black'}>
        {amountDone}/{todos.length}
      </p>
    </section>
  );
}

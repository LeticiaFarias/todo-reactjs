import { useState } from 'react';

import { NewTodoDto } from '../../domain/dtos/new-todo.dto';

interface ITodoForm {
  addTodo: (newTodo: NewTodoDto) => void;
}

export function TodoForm({ addTodo }: ITodoForm) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  const handleAddTodo = () => {
    const newTodo = {
      title,
      description,
      reminderDate,
    } satisfies NewTodoDto;

    addTodo(newTodo);

    setTitle('');
    setDescription('');
    setReminderDate('');
  };

  return (
    <section className="p-3 mb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 items-end bg-sky-400 rounded-md">
      <div className="flex flex-col">
        <label htmlFor={'title'}>Título</label>
        <input
          className={'p-2 h-16 flex-1 rounded-sm px-2'}
          id={'title'}
          name={'title'}
          type={'text'}
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={'description'}>Descrição</label>
        <input
          className={'p-2 flex-1 rounded-sm px-2'}
          id={'description'}
          name={'description'}
          type={'text'}
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={'reminder-date'}>Lembrete</label>
        <input
          className={'p-2 rounded-sm'}
          id={'reminder-date'}
          name={'reminder-date'}
          type={'datetime-local'}
          value={reminderDate}
          onChange={({ target: { value } }) => setReminderDate(value)}
        />
      </div>
      <button
        className={'p-3 bg-gray-300 rounded-md text-slate-950'}
        onClick={handleAddTodo}
      >
        {'Adicionar ToDo'}
      </button>
    </section>
  );
}

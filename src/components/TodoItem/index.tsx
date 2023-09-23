import clsx from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useMemo } from 'react';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { TrashSimple } from '@phosphor-icons/react';

dayjs.extend(localizedFormat);
dayjs.locale('pt-br');

import { TodoModel } from '../../domain/models/todo';

interface ITodoItem {
  todo: TodoModel;
  toggle: () => void;
  remove: () => void;
}

export function TodoItem({ todo, toggle, remove }: ITodoItem) {
  const done = useMemo(() => todo.doneAt != null, [todo]);

  return (
    <div
      className={clsx(
        'w-full px-4 py-3 rounded-md border-1 border-gray-600 flex flex-row gap-6 justify-between items-center',
        {
          'bg-gray-500': !done,
          'bg-green-900': done,
        }
      )}
    >
      <input
        className={'w-4 h-4 cursor-pointer'}
        type={'checkbox'}
        id={`checkbox-${todo.id}`}
        name={`checkbox-${todo.id}`}
        checked={done}
        onChange={() => toggle()}
      />
      <label
        className={'w-full flex flex-row justify-between cursor-pointer'}
        htmlFor={`checkbox-${todo.id}`}
      >
        <div className={'flex flex-1 flex-col gap-1'}>
          <p className={'text-gray-900 text-lg'}>{todo.title}</p>

          <p className={'text-gray-700 text-sm'}>{todo.description}</p>
        </div>

        <div className={'flex flex-col'}>
          <p className={'text-gray-900 text-base'}>Lembrete</p>
          <p className={'text-gray-700 text-sm'}>
          </p>
        </div>
      </label>
      <button onClick={remove}>
        <TrashSimple size={28} color={'red'} />
      </button>
    </div>
  );
}

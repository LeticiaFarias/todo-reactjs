import { atom } from 'recoil';

import { TODOS } from '../contants';

export const todosState = atom({
  key: TODOS,
  default: (() => {
    const storageTodos = localStorage.getItem(TODOS);
    const storedTodos = storageTodos ? JSON.parse(storageTodos) : [];
    return storedTodos;
  })(),
  effects: [
    ({ onSet }) => {
      onSet((newTodos) => {
        localStorage.setItem(TODOS, JSON.stringify(newTodos));
      });
    },
  ],
});

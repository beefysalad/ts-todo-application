import { Button, Center, Heading } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { AddTodo } from '../features/AddTodo/components/AddTodo';
import TodoService from '../service/TodoService';
import { TodoType } from '../types/index';
import { TodoList } from './TodoList';
interface TodoProps {
  children?: React.ReactNode;
}

const TodoContextDefaultValue = {
  todos: TodoService.getTodos(),
  setTodos: (todos: any) => {},
};

export const TodoContext = createContext(TodoContextDefaultValue);

export const Todo = ({ children }: TodoProps) => {
  const [todos, setTodos] = useState<TodoType[]>(TodoContextDefaultValue.todos);

  const TodoProviderValue = {
    todo: { todos },
    setState: (state: TodoType) => {},
  };
  useEffect(() => {
    TodoService.addTodos(todos);
  }, [todos]);

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Center mb='5'>
          <Heading>My Todo List</Heading>
        </Center>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
};

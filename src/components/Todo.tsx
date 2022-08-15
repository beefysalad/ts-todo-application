import { Button, Center, Heading } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { AddTodo } from '../features/AddTodo/components/AddTodo';
import TodoService from '../service/TodoService';
import { TodoType } from '../types/index';
import { TodoList } from './TodoList';
interface TodoProps {
  children?: React.ReactNode;
}

export const TodoContext = createContext<TodoType[]>([]);

export const Todo = ({ children }: TodoProps) => {
  const [todo, setTodos] = useState<TodoType[]>(TodoService.getTodos() || []);

  useEffect(() => {
    TodoService.addTodos(todo);
  }, [todo]);

  return (
    <>
      <TodoContext.Provider value={todo}>
        <Center mb='5'>
          <Heading>My Todo List</Heading>
        </Center>
        <AddTodo setTodos={setTodos} />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
};

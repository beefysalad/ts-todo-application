import { Button, Center, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import TodoService from '../service/TodoService';
import { TodoType } from '../types/index';
interface TodoProps {
  children: React.ReactNode;
}
export const Todo = ({ children }: TodoProps) => {
  const [todo, setTodos] = useState<TodoType[]>(TodoService.getTodos() || []);

  const handleClick = () => {
    let data = {
      title: 'ASD',
      description: 'TEST',
    };
    setTodos((prevTodo) => [...prevTodo, data]);
    TodoService.addTodos(todo);
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <>
      <Center mb='5'>
        <Heading>My Todo List</Heading>
        <Button onClick={handleClick}>Click</Button>
      </Center>
      {children}
    </>
  );
};

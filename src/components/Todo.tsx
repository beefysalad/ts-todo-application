import { Center, Heading } from '@chakra-ui/react';

interface TodoProps {
  children: React.ReactNode;
}
export const Todo = ({ children }: TodoProps) => {
  return (
    <>
      <Center mb='5'>
        <Heading>My Todo List</Heading>
      </Center>
      {children}
    </>
  );
};

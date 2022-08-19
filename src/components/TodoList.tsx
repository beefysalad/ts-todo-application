import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import { TodoContext } from './Todo';
import { DeleteTodo } from '../features/DeleteTodo/components/DeleteTodo';
import { UpdateTodo } from '../features/UpdateTodo/components/UpdateTodo';
export const TodoList = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const { todos, setTodos } = useContext(TodoContext);
  console.log(todos);
  const renderTodos = todos.map((todo) => {
    return (
      <Box mb='15px' key={todo.key}>
        <Flex flexDirection='row' alignItems='center'>
          <Box px='15' mb='15px'>
            <Heading size='lg'>{todo.title}</Heading>
            <Text
              wordBreak='break-all'
              textAlign='justify'
              whiteSpace='pre-line'
            >
              {todo.description}
            </Text>
          </Box>
          <Spacer />

          <HStack>
            <DeleteTodo index={todo.key} />
            <UpdateTodo index={todo.key} />
          </HStack>
        </Flex>

        <Divider />
      </Box>
    );
  });
  return (
    <>
      {todos.length > 0 ? (
        <Box
          w={{ base: 'full', md: 'container.md' }}
          mt='5'
          bg={bg}
          maxW='container.md'
          mx='auto'
          rounded='15'
          boxShadow='md'
        >
          <Flex w='full' py='25' px='15' flexDirection='column-reverse'>
            {renderTodos}
          </Flex>
        </Box>
      ) : (
        <Heading mt='5rem' textAlign='center'>
          You currently have no tasks :c
        </Heading>
      )}
    </>
  );
};

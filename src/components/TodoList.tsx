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
export const TodoList = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const { todos, setTodos } = useContext(TodoContext);

  const renderTodos = todos.map((todo) => {
    return (
      <Box mb='15px' key={todo.key}>
        <Flex flexDirection='row'>
          <Box px='15' mb='15px'>
            <Heading size='lg'>{todo.title}</Heading>
            <Text wordBreak='break-all' textAlign='justify'>
              {todo.description}
            </Text>
          </Box>
          <Spacer />
          <HStack>
            <DeleteTodo index={todo.key} />
            <IconButton
              fontSize='lg'
              colorScheme='teal'
              aria-label='Delete Todo'
              icon={<AiFillEdit />}
              _hover={{ transform: 'translateY(-0.15em)' }}
            />
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

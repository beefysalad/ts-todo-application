import {
  Box,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  Heading,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { DeleteTodo } from '../features/DeleteTodo/components/DeleteTodo';
import { FinishTodo } from '../features/FinishTodo/components/FinishTodo';
import { UpdateTodo } from '../features/UpdateTodo/components/UpdateTodo';
import { TodoContext } from './Todo';

export const TodoList = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const { todos } = useContext(TodoContext);
  console.log(todos);
  const renderTodos = todos.map((todo) => {
    return (
      <Box mb='15px' key={todo.key}>
        <Flex flexDirection='row' alignItems='center'>
          <Flex px='15' mb='15px' direction='column' alignItems='start'>
            <Heading size='lg'>{todo.title}</Heading>
            <Text
              wordBreak='break-all'
              textAlign='justify'
              whiteSpace='pre-line'
            >
              {todo.description}
            </Text>
          </Flex>
          <Spacer />

          <HStack>
            <DeleteTodo index={todo.key} />
            <UpdateTodo index={todo.key} />
            <FinishTodo />
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
        <Heading textAlign='center'>You currently have no tasks :c</Heading>
      )}
    </>
  );
};

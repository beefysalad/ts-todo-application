import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spacer,
  Text,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { AddTodoState } from '../types/index';

export const AddTodo = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const [todo, setTodo] = useState<AddTodoState>({
    title: '',
    description: '',
  });

  const toast = useToast();
  const handleAddTodo = (): void => {
    let title: string, description: string, status: any;
    if (todo.title.length === 0 && todo.description.length === 0) {
      title = 'Whoops, Error!';
      description = "Task title and description can't be empty";
      status = 'error';
    } else {
      title = 'Yay, Success!';
      description = 'Task has been added successfully';
      status = 'success';
      setTodo({
        title: '',
        description: '',
      });
    }
    toast({
      title,
      description,
      status,
      duration: 5000,
      position: 'top-right',
      isClosable: true,
    });
  };

  return (
    <Box
      w={{ base: 'full', md: 'container.md' }}
      bg={bg}
      maxW='container.md'
      mx='auto'
      rounded='15'
      boxShadow='md'
      py='0'
      px={{ base: '3', md: '5', lg: '8' }}
    >
      <Flex w='full' py='25' flexDirection='row' justifyContent='center'>
        <HStack>
          <Input
            variant='filled'
            placeholder='Task Title'
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <Input
            variant='filled'
            placeholder='Task Description'
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </HStack>
        <Button
          variant='solid'
          colorScheme='teal'
          onClick={handleAddTodo}
          ml='8px'
          px='2rem'
        >
          Add todo
        </Button>
      </Flex>
    </Box>
  );
};

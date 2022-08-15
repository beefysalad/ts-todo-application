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
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { AddTodoState } from '../types/index';
import { MdOutlineAdd } from 'react-icons/md';
export const AddTodo = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const [todo, setTodo] = useState<AddTodoState>({
    title: '',
    description: '',
  });
  const [disabled, setDisabled] = useState<boolean>(true);
  const handleAddTodo = (): void => {
    alert(`${todo.title} - ${todo.description}`);
  };
  useEffect(() => {
    if (todo.title.length > 0 && todo.description.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [todo.title, todo.description]);
  return (
    <Box
      w={{ base: 'full', md: 'container.md' }}
      bg={bg}
      maxW='container.md'
      mx='auto'
      rounded='15'
      boxShadow='md'
    >
      <Flex
        w='full'
        py='25'
        px='15'
        flexDirection='row'
        justifyContent='center'
      >
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
        <Button
          variant='solid'
          colorScheme='teal'
          disabled={disabled}
          onClick={handleAddTodo}
          ml='1rem'
        >
          Add todo
        </Button>
      </Flex>
    </Box>
  );
};

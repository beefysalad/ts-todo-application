import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../../../components/Todo';
import { AddTodoState } from '../types/index';

interface AddTodoProps {
  setTodos?: (todo: any) => void;
}
export const AddTodo = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const [tasks, setTasks] = useState<AddTodoState>({
    title: '',
    description: '',
  });
  const { setTodos } = useContext(TodoContext);
  const [index, setIndex] = useState<number>(0);

  const toast = useToast();
  const handleAddTodo = (): void => {
    let title: string, description: string, status: any;

    if (tasks.title.length > 0 && tasks.description.length > 0) {
      setTasks({
        title: '',
        description: '',
      });
      title = 'Yay, Success!';
      description = 'Task has been added successfully';
      status = 'success';
      const data = {
        title: tasks.title,
        description: tasks.description,
        key: uuidv4(),
      };
      setTodos((prevTodo: any) => [...prevTodo, data]);
      setIndex(index + 1);
    } else {
      title = 'Whoops, Error!';
      description = "Task title and description can't be empty";
      status = 'error';
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
            placeholder='Title'
            value={tasks.title}
            onChange={(e) => setTasks({ ...tasks, title: e.target.value })}
          />
          <Input
            variant='filled'
            placeholder='Description'
            value={tasks.description}
            onChange={(e) =>
              setTasks({ ...tasks, description: e.target.value })
            }
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

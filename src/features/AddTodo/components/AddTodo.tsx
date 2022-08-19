import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  useToast,
  useColorModeValue,
  VStack,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { TodoContext } from '../../../components/Todo';
import { AddTodoState } from '../interface/index';

export const AddTodo = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const [tasks, setTasks] = useState<AddTodoState>({
    title: '',
    description: '',
  });
  const { todos, setTodos } = useContext(TodoContext);
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
        key: todos.length + 1,
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
      position: 'bottom',
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
      <Flex w='full' mt='5' flexDirection='column'>
        <VStack>
          <FormControl>
            <FormLabel>Task Title</FormLabel>
            <Input
              variant='filled'
              placeholder='e.g. Learn TypeScript'
              value={tasks.title}
              onChange={(e) => setTasks({ ...tasks, title: e.target.value })}
            />
          </FormControl>

          {/* <Input
            variant='filled'
            placeholder='Description'
            value={tasks.description}
            onChange={(e) =>
              setTasks({ ...tasks, description: e.target.value })
            }
          /> */}
          <FormControl>
            <FormLabel>Task Description</FormLabel>
            <Textarea
              variant='filled'
              placeholder='e.g. Practice firsthand about the fundamentals of TypeScript '
              value={tasks.description}
              onChange={(e) =>
                setTasks({ ...tasks, description: e.target.value })
              }
              resize='none'
            />
          </FormControl>
        </VStack>
      </Flex>
      <Box
        py='5'
        w='full'
        as={Flex}
        flexDirection='row'
        justifyContent={{ base: 'center', md: 'end', lg: 'end' }}
      >
        <Button
          variant='solid'
          colorScheme='teal'
          onClick={handleAddTodo}
          ml='8px'
          px='2rem'
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

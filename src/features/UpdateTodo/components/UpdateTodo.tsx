import {
  IconButton,
  Button,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { CustomModal } from '../../../components/CustomModal';
import { TodoContext } from '../../../components/Todo';
import { TodoType } from '../../../types/index';
import { UpdateTodoProps } from '../interface';
export const UpdateTodo = ({ index }: UpdateTodoProps) => {
  const { todos, setTodos } = useContext(TodoContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [currentTodo, setCurrentTodo] = useState<TodoType>({
    title: '',
    description: '',
    key: 0,
  });
  const getCurrentTodo = (): void => {
    const editingTodo = todos.filter((todo) => todo.key === index);
    setCurrentTodo(editingTodo[0]);
  };
  const handleTodoEdit = (): void => {
    const newTodo = todos.map((todo) => {
      return todo.key === index
        ? {
            title: currentTodo.title,
            description: currentTodo.description,
            key: todo.key,
          }
        : todo;
    });
    setTodos(newTodo);
    onClose();
  };
  const handleButtonEdit = (): void => {
    onOpen();
    getCurrentTodo();
  };
  const handleOnChange = (e: any): void => {
    setCurrentTodo({
      ...currentTodo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <IconButton
        fontSize='lg'
        colorScheme='teal'
        aria-label='Delete Todo'
        icon={<AiFillEdit />}
        _hover={{ transform: 'translateY(-0.15em)' }}
        onClick={handleButtonEdit}
      />
      <CustomModal isOpen={isOpen} onClose={onClose} header={`Editing task`}>
        <ModalBody>
          <Flex flexDirection='column'>
            <FormControl px='25'>
              <FormLabel>Task Title</FormLabel>
              <Input
                name='title'
                variant='filled'
                value={currentTodo.title}
                onChange={handleOnChange}
              />
            </FormControl>
            <FormControl px='25' mt='15'>
              <FormLabel>Task Description</FormLabel>
              <Textarea
                name='description'
                variant='filled'
                resize='none'
                value={currentTodo.description}
                onChange={handleOnChange}
              />
            </FormControl>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='teal' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='green' onClick={handleTodoEdit}>
            Save
          </Button>
        </ModalFooter>
      </CustomModal>
    </>
  );
};

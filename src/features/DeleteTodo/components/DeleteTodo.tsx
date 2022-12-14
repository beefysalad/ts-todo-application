import {
  Button,
  IconButton,
  ModalBody,
  ModalFooter,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import { useContext } from 'react';
import { TodoContext } from '../../../components/Todo';
import { CustomModal } from '../../../components/CustomModal';
import { DeleteTodoProps } from '../interface';

export const DeleteTodo = ({ index }: DeleteTodoProps) => {
  const { todos, setTodos } = useContext(TodoContext);

  const { onOpen, isOpen, onClose } = useDisclosure();
  const handleDeleteTodo = (): void => {
    const newTodo = todos.filter((todo) => todo.key !== index);
    setTodos(newTodo);
  };
  return (
    <>
      <IconButton
        fontSize='lg'
        colorScheme='teal'
        aria-label='Delete Todo'
        icon={<AiFillDelete />}
        _hover={{ transform: 'translateY(-0.15em)' }}
        onClick={onOpen}
      />
      <CustomModal isOpen={isOpen} onClose={onClose} header={'Deleting Todo'}>
        <ModalBody>
          <Text>Are you sure you want to delete this task?</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='teal' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='red' onClick={() => handleDeleteTodo()}>
            Delete
          </Button>
        </ModalFooter>
      </CustomModal>
    </>
  );
};

import { IconButton } from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
export const FinishTodo = () => {
  return (
    <>
      <IconButton
        fontSize='lg'
        colorScheme='teal'
        aria-label='Finished Todo'
        icon={<BiCheck />}
        _hover={{ transform: 'translateY(-0.15em)' }}
      />
    </>
  );
};

import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
export const TodoList = () => {
  const bg = useColorModeValue('gray.100', 'whiteAlpha.100');
  return (
    <Box
      w={{ base: 'full', md: 'container.md' }}
      mt='5'
      bg={bg}
      maxW='container.md'
      mx='auto'
      rounded='15'
      boxShadow='md'
    >
      <Flex w='full' py='25' px='15' flexDirection='column'>
        <Box mb='15px'>
          <Flex flexDirection='row'>
            <Box px='15' mb='15px'>
              <Heading size='lg'>Haha</Heading>
              <Text textAlign='justify'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                ex dolore ullam neque? Cumque debitis eos fugiat, sapiente quia
                eaque hic quod in nisi deleniti deserunt velit ratione quaerat
                cum? Fugiat ab qui labore a. Dolores quo earum quasi dolor
                numquam, dicta modi enim optio sit officia nemo! Rem expedita
                corrupti aliquam tenetur provident quidem, quaerat at nesciunt
                non praesentium? Quasi corrupti nemo omnis culpa nobis! Soluta
                dolores voluptas nulla iure quasi, modi voluptatum id nemo
                pariatur, quia reprehenderit ducimus odit quidem in debitis
                consectetur reiciendis sed aperiam eos praesentium?
              </Text>
            </Box>
            <Spacer />
            <HStack>
              <IconButton
                fontSize='lg'
                colorScheme='teal'
                aria-label='Delete Todo'
                icon={<AiFillDelete />}
                _hover={{ transform: 'translateY(-0.15em)' }}
              />
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

        <Box mb='15px'>
          <Box px='15' mb='15px'>
            <Heading size='lg'>Title</Heading>
            <Text>Description</Text>
          </Box>
          <Divider />
        </Box>
      </Flex>
    </Box>
  );
};

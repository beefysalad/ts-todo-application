import { Box, Center, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface FooterProps {
  children?: React.ReactNode;
}
const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <Box w='full' h='auto' py='5'>
      <Flex justifyContent='center'>
        <Text fontSize='xs'>
          Copyright &copy; 2022 :{' '}
          <Link
            href='https://github.com/beefysalad/ts-todo-application'
            target='_blank'
          >
            Saladu
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;

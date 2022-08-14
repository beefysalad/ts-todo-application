import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface FooterProps {
  children?: React.ReactNode;
}
const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <Box w='full' h='auto' py='5'>
      <Flex justifyContent='center'>
        <Text>I am a footer</Text>
      </Flex>
    </Box>
  );
};
export default Footer;

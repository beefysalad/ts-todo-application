import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { MdInvertColors } from 'react-icons/md';
function Header() {
  const BEEFY_GITHUB_URL = 'https://github.com/beefysalad';
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box zIndex='1' w='full' position='fixed' top='0' left='0' bg={colorMode}>
      <Flex alignItems='center' px='8' py='3'>
        <Box>
          <Heading size='md'>Todo React</Heading>
        </Box>
        <Spacer />
        <Box>
          <Heading size='md'>
            <HStack>
              <Link href={BEEFY_GITHUB_URL} target='_blank'>
                BeefySalad
              </Link>
              <IconButton
                aria-label='toggle color mode'
                icon={<MdInvertColors />}
                variant='ghost'
                onClick={toggleColorMode}
                _hover={{ color: colorMode }}
              />
            </HStack>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
export default Header;

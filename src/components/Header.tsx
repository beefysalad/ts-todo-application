import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { MdInvertColors } from 'react-icons/md';

function Header() {
  const BEEFY_GITHUB_URL = 'https://github.com/beefysalad';
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex='1'
      w='full'
      position='fixed'
      top='0'
      left='0'
      bg={colorMode}
      boxShadow='md'
    >
      <Flex alignItems='center' px={{ base: '3', md: '5', lg: '8' }} py='3'>
        <Box>
          <Heading size='md'>
            <HStack>
              <Link>BeefySalad</Link>
            </HStack>
          </Heading>
        </Box>
        <Spacer />
        <Tooltip label='toggle color mode' hasArrow size='md' placement='auto'>
          <IconButton
            aria-label='toggle color mode'
            icon={<MdInvertColors />}
            variant='ghost'
            onClick={toggleColorMode}
            _hover={{ color: colorMode }}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}
export default Header;

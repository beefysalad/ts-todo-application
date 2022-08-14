import { Box, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react';

function Header() {
  const BEEFY_GITHUB_URL = 'https://github.com/beefysalad';
  return (
    <Box zIndex='2' w='full' position='fixed' top='0' left='0'>
      <Flex alignItems='center' px='8' py='3'>
        <Box>
          <Heading size='md'>Todo React</Heading>
        </Box>
        <Spacer />
        <Box>
          <Heading size='md'>
            <Link href={BEEFY_GITHUB_URL} target='_blank'>
              BeefySalad
            </Link>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
export default Header;

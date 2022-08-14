import { Container, Heading, Flex, Center } from '@chakra-ui/react';
import { FC } from 'react';
import Footer from './Footer';
import Header from './Header';
interface AppLayoutProps {
  children?: React.ReactNode;
}
const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        as={Flex}
        gap='5'
        flexDirection='column'
        justifyContent='start'
        alignItems='center'
        maxW='container.2xl'
        px='8'
        minH='100vh'
      >
        <Flex
          pt='20'
          flexDirection='column'
          alignItems='center'
          w='full'
          h='full'
          gap='5'
          flexGrow='1'
        >
          {children}
        </Flex>
        <Footer />
      </Container>
    </>
  );
};

export default AppLayout;

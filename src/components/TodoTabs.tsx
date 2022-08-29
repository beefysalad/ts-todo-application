import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

import { TodoList } from './TodoList';
export const TodoTabs = () => {
  return (
    <>
      <Box mt='3rem' mx='auto'>
        <Tabs colorScheme='teal' align='center' variant='solid-rounded'>
          <TabList>
            <Tab>All Todos</Tab>
            <Tab>Completed</Tab>
            <Tab>Pending</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TodoList />
            </TabPanel>
            <TabPanel>
              <TodoList />
            </TabPanel>
            <TabPanel>
              <TodoList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

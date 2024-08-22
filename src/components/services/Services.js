import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Button } from '@chakra-ui/react';
import Tattoos from './Tattoos';
import Piercings from './Piercings';

const Services = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = index => {
    setSelectedTabIndex(index);
  };

  // Array of service names for the tabs
  const serviceNames = ['Tattoos', 'Piercings'];

  return (
    <Box bg="black" color="white" textAlign="center" padding="2rem">
    <Tabs index={selectedTabIndex} onChange={handleTabChange} variant="unstyled">
  <TabList justifyContent="center" w="100%" borderRadius="40px">
    {/* Map through service names and render tabs dynamically */}
    {serviceNames.map((serviceName, index) => (
      <Tab key={index} ml={index !== 0 ? 8 : 0} size="md" _selected={{ color: 'teal.500' }}>
        <Button variant="unstyled" color="black" _hover={{ color: 'teal.500' }} borderRadius="3px">
          {serviceName}
        </Button>
      </Tab>

    ))}
  </TabList>


        <TabPanels>
          {/* Render TabPanels for each service */}
          <TabPanel>
            <Tattoos />
          </TabPanel>
          <TabPanel>
            <Piercings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Services;

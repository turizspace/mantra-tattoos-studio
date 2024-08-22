// Footer.jsx
import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="black" py="1.5em">
      <Container maxW="container.xl" textAlign="center">
        <Text fontSize="1.3em">Need to talk to us? Call: 0797 332 515 || 0715 659 527</Text>
      </Container>
    </Box>
  );
}

export default Footer;

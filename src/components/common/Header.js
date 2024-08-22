import React from 'react';
import { Box, Container, Flex, Image, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="#332C2C" color="white" py="1.5em" px="1em"> {/* Updated background color to black */}
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Image src="/mantra.png" alt="Mantra Logo" w="3.5em" h="3.5em" borderRadius="50px" /> {/* Added borderRadius="full" for rounded corners */}
            <Heading size="md" ml="1.5em">MANTRA TATTOO STUDIO</Heading>
          </Flex>

        </Flex>
      </Container>
    </Box>
  );
}

export default Header;

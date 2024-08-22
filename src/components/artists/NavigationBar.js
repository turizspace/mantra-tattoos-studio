import React from 'react';
import { Flex, Link, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleTattoostrClick = () => {
    navigate('/tattoostr'); // Replace with your component's route path
  };

  return (
    <Flex
      as="nav"
      alignItems="center"
      justify="flex-end"
      bg="black"
      color="white"
      py="1rem"
      px="2rem"
      zIndex="999"
      position="sticky"
      top="0"
    >
      {/* Menu Items */}
      <Link mr="1em" color="orange" _hover={{ textDecoration: 'underline' }}>Home</Link>
      <Link mr="1em" color="orange" _hover={{ textDecoration: 'underline' }}>Portfolio</Link>
      <Link mr="1em" color="orange" _hover={{ textDecoration: 'underline' }}>Reach Us</Link>
      <Button onClick={handleTattoostrClick} color="white" bg="orange">
        TATTOOSTR
      </Button>
    </Flex>
  );
};

export default NavigationBar;

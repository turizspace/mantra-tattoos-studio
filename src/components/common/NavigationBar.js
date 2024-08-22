import React, { useState } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm'; // Import your contact form component

const NavigationBar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility


  const handlePortfolioClick = () => {
    if (isModalOpen) setIsModalOpen(false); // Close the modal if it's open
    navigate('/services');
  };

  const handleReachUsClick = () => {
    setIsModalOpen(prevState => !prevState); // Toggle modal state
  };

  const handleHomeClick = () => {
    if (isModalOpen) setIsModalOpen(false); // Close the modal if it's open
    navigate('/');
  };

  return (
    <>
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
        <Link onClick={handleHomeClick} mr="1em" color="orange" _hover={{ textDecoration: 'underline' }}>Home</Link>
        <Link onClick={handlePortfolioClick} mr="1em" color="orange" _hover={{ textDecoration: 'underline' }}>Portfolio</Link>
        <Link onClick={handleReachUsClick} mr="1em" color="orange" _hover={{ textDecoration: 'underline' }}>Reach Us</Link>

      </Flex>

      {/* Modal for Reach Us */}
      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default NavigationBar;

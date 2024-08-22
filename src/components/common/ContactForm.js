import React from 'react';
import { Box, Container, Text, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';

const ContactForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="rgba(0, 0, 0, 0.5)" // Adjust opacity here
        css={{
          backdropFilter: 'blur(5px)', // Adjust blur effect here
        }}
        onClick={onClose} // Close the modal when clicked
      />
      <ModalContent mt="9rem">
        <ModalBody>
          <Box position="relative" bg="#1B1916" color="white" py="1.5em" px="1em" textAlign="center">
            <Container maxW="container.xl">
              <Text fontSize="lg">Reach Us</Text>
              <Text mb="2" color="orange">Phone: 0797 332 515 || 0715 659 527</Text>
              <Text mb="2" color="orange">Email: hello@mantratattoos.ink</Text>
            </Container>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactForm;

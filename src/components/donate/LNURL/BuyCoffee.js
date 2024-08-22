import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import QRCode from 'qrcode.react';

const BuyCoffee = () => {
  const [qrData, setQrData] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Replace 'YOUR_LUD16_ADDRESS' with your actual lud16 address
    const lud16Address = 'fiatjaf@walletofsatoshi.com';
    setQrData(lud16Address);
  }, []);

  const generateQRCode = () => {
    setLoading(true);
    setIsOpen(true); // Open the modal after generating QR code
    setLoading(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box bg="#1B1916" color="white" py="1.5em" px="1em" textAlign="center">
      <Container maxW="container.md">
        <Text fontSize="lg" mb="4">Support Us</Text>
        <Button
          onClick={generateQRCode}
          colorScheme="blue"
          borderRadius="21px"
          fontSize={{ base: "1em", md: "1.2em" }}
          px={{ base: "4", md: "6" }}
          py={{ base: "2", md: "3" }}
          _hover={{ bg: 'blue.600' }}
        >
          Buy Us a Coffee
        </Button>
        {isOpen && (
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.6)" // Adjust opacity as needed
            zIndex="modal"
            backdropFilter="blur(8px)" // Apply blur effect
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Modal isOpen={isOpen} onClose={handleClose} motionPreset="slideInBottom" closeOnOverlayClick={false}>
              <ModalOverlay />
              <ModalContent borderRadius="md" maxW={{ base: "90%", md: "500px" }} marginTop="20vh">
                <ModalHeader
                  textAlign="center"
                  fontWeight="bold"
                  color="white"
                >
                  Scan the QR Code
                </ModalHeader>
                <ModalCloseButton color="white" />

                <ModalBody textAlign="center" py="6">
                  {loading ? (
                    <Text>Loading...</Text>
                  ) : (
                    <>
                      <Text fontSize="md" mb="4">This is a Lightning address</Text>
                      <QRCode value={qrData} size={256} /> {/* Adjust QR code size for responsiveness */}
                    </>
                  )}
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default BuyCoffee;

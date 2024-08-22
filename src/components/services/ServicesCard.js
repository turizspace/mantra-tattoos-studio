import React, { useState, useEffect } from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const ServiceCard = ({ imageUrl, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(imageUrl) && imageUrl.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1));
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [imageUrl]);

  return (
    <Box p="4" borderWidth="1px" borderRadius="45px" overflow="hidden" position="relative">
      <Image
        src={Array.isArray(imageUrl) ? imageUrl[currentImageIndex] : imageUrl}
        alt={title}
        w="254px"
        h="254px"
        objectFit="cover"
        borderRadius="55px"
        transition="transform 1s"
        _hover={{ transform: 'scale(1.2)' }}
      />
      <Box mt="3">
        <Heading size="md" fontWeight="semibold">{title}</Heading>
        <Text mt="0" fontSize="sm">{description}</Text>
      </Box>
    </Box>
  );
}

export default ServiceCard;

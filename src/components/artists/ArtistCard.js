// ArtistCard.jsx
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const ArtistCard = ({ name, specialty, imageUrl }) => {
  return (
    <Box p="2em" borderWidth="10px" borderRadius="lg">
      <Image
        src={imageUrl}
        alt={name}
        borderRadius="50%"
        fontSize="1.3em"
        mb="4"
        width="254px" // Set width to 254px
        height="254px" // Set height to 254px
        objectFit="cover" // Maintain image proportions and crop if needed
      />
      <Heading size="md">{name}</Heading>
      <Text fontSize="1.12em" mt="1">{specialty}</Text>
    </Box>
  );
}

export default ArtistCard;

import React from 'react';
import { Box, Container, Grid, Heading, Text, Center } from '@chakra-ui/react';
import ArtistCard from './ArtistCard'; // Import the ArtistCard component

// Dummy data for artists (replace it with your actual data)
const artistsData = [
  { id: 1, name: 'Stacy Blu', specialty: 'Tattoo, Piercing and Interior design', imageUrl: 'assets/images/artists/stacyblu.jpg' },
  { id: 2, name: 'Turiz', specialty: 'Tattoo, Graphics', imageUrl: 'assets/images/artists/turiz.jpg' },
  { id: 3, name: 'Shyrah', specialty: 'Tattoo', imageUrl: 'assets/images/artists/shyrah.jpeg' },

  // Add more artists as needed
];

const Artists = () => {
  return (
    <Container maxW="container.lg" mt="2em" textAlign="center" bg="gray.100">
      <Box mb="2em">
        <Heading size="lg" mb="1em">Meet Our Artists</Heading>
        <Text fontSize="1.7em">Get to know our talented artists.</Text>
      </Box>
      <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {artistsData.map(artist => (
          <ArtistCard
            key={artist.id}
            name={artist.name}
            specialty={artist.specialty}
            imageUrl={artist.imageUrl} // Pass the imageUrl prop
          />
        ))}
      </Grid>
    </Container>

  );
}

export default Artists;

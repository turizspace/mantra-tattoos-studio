import React from 'react';
import { Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import ServiceCard from './ServicesCard'; // Import the ServiceCard component

const Piercings = () => {
  return (
    <Container maxW="container.lg" textAlign="center" bg="black" color="#FF8407">
      <Heading size="lg" mb="1em">Our Piercings</Heading>
      <Text fontSize="2.25em">Explore our range of piercing services crafted by our skilled artists.</Text>

      <Grid templateColumns="repeat(auto-fill, minmax(254px, 1fr))" gap="3em">
        {/* Piercing Service Cards */}
        <GridItem>
          <ServiceCard
            imageUrl="/assets/images/piercings/body_pins.jpg"
            title="Body Piercings"
            description={<Text fontSize="2.12em" color="#F8D619">Flaunt your midriff with naval piercings or embrace body positivity with nipple piercings.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServiceCard
            imageUrl="/assets/images/piercings/nose_small.jpg"
            title="Nose Piercings"
            description={<Text fontSize="2.12em" color="#F8D619">Spice up your look with a cute nose piercing, giving your face some extra oomph!</Text>}
          />
        </GridItem>
        <GridItem>
          <ServiceCard
            imageUrl="/assets/images/piercings/ear_silver.jpg"
            title="Unique Piercings - Silver"
            description={<Text fontSize="2.12em" color="#F8D619">Discover your unique style with bold bull rings, chic lip studs, and a curated selection of distinctive piercings.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServiceCard
            imageUrl="/assets/images/piercings/ear_black.jpg"
            title="Unique Piercings - Black"
            description={<Text fontSize="2.12em" color="#F8D619">Evoke a dark and mysterious aesthetic with our collection of black gothic rings, perfect for those embracing an emo vibe.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServiceCard
            imageUrl="/assets/images/piercings/ear_golden.jpg"
            title="Ear rings - Golden"
            description={<Text fontSize="2.12em" color="#F8D619">Elevate your style with our stunning collection of golden earrings, adding a touch of luxury and sophistication to any look.</Text>}
          />
        </GridItem>
        {/* Add more Piercing Service Cards as needed */}
      </Grid>
    </Container>
  );
}

export default Piercings;

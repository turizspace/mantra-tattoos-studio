import React from 'react';
import { Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import ServicesCard from './ServicesCard'; // Import the ServiceCard component

const Tattoos = () => {
  return (
    <Container maxW="container.lg" textAlign="center" bg="black" color="#FF8407">
      <Heading size="lg" mb="1em">Our Tattoos</Heading>
      <Text fontSize="2.25em">Explore our range of tattoo designs crafted by our skilled artists.</Text>

      <Grid templateColumns="repeat(auto-fill, minmax(254px, 1fr))" gap="3em">
        {/* Tattoo Service Cards */}
        <GridItem>
          <ServicesCard
            imageUrl="/assets/images/tattoos/inking.jpg"
            title="Traditional Tattoos"
            description={<Text fontSize="1.8em" color="#F8D619">Embrace the classic look with our timeless traditional tattoos, perfect for those who appreciate heritage and culture.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServicesCard
            imageUrl="/assets/images/tattoos/inking2.jpg"
            title="Realistic Tattoos"
            description={<Text fontSize="1.8em" color="#F8D619">Bring your ideas to life with our stunningly realistic tattoos, meticulously crafted to capture every detail.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServicesCard
            imageUrl="/assets/images/tattoos/inking_geometry.jpg"
            title="Geometric Tattoos"
            description={<Text fontSize="1.8em" color="#F8D619">Explore the world of geometry with our intricate geometric tattoos, combining art and mathematics for a truly unique design.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServicesCard
            imageUrl="/assets/images/tattoos/inking4.jpg"
            title="Watercolor Tattoos"
            description={<Text fontSize="1.8em" color="#F8D619">Make a splash with our vibrant watercolor tattoos, adding a pop of color and personality to your skin.</Text>}
          />
        </GridItem>
        <GridItem>
          <ServicesCard
          imageUrl={[
                        "/assets/images/tattoos/inking_color.jpg",
                        "/assets/images/tattoos/inking_minimal.jpg"
                      ]}
            title="Minimalist Tattoos"
            description={<Text fontSize="1.8em" color="#F8D619">Less is more with our minimalist tattoos, featuring clean lines and subtle designs for those who appreciate simplicity.</Text>}
          />
        </GridItem>
        {/* Add more Tattoo Service Cards as needed */}
      </Grid>
    </Container>
  );
}

export default Tattoos;

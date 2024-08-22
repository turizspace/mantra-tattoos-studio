    import React from 'react';
  import { Box, Container, Heading } from '@chakra-ui/react';
  import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

  const MapContainer = () => {
    const mapStyles = {
      height: "400px",
      width: "100%"
    };

    const defaultCenter = {
      lat: -1.143611,
      lng: 36.969974
    };

    return (
      <LoadScript googleMapsApiKey="AIzaSyDE1S7-TP4vQjPsgWlpuosJbSpna0MPvLo"> {/* Replace YOUR_API_KEY with your actual API key */}
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  }

  const Portfolio = () => {
    return (
      <Container maxW="container.lg" mt="2em" textAlign="center">
        <Box bg="#373131" color="white" py="1.5em" px="1em"> {/* Updated background color to black */}
          <Heading size="lg" mb="1em">Find Us on the Map</Heading>
          <MapContainer />
        </Box>
      </Container>
    );
  }

  export default Portfolio;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Text, Button, chakra } from '@chakra-ui/react';
import { shouldForwardProp } from '@chakra-ui/system'; // Import shouldForwardProp from @chakra-ui/system
import heroImage from '../../assets/bgimages/inking2.jpg';
import Artists from '../artists/Artists'; // Import the Artists component
import MapContainer from '../location/Map'; // Import the MapContainer component
import ContactForm from '../common/ContactForm'; // Import the ContactForm component
import BuyCoffee from '../donate/LNURL/BuyCoffee'; // Import the ContactForm component

const ChakraMotionBox = chakra(motion.div, {
  shouldForwardProp: shouldForwardProp, // Pass shouldForwardProp from @chakra-ui/system
});

const LandingPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const handleBookNowClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <Box
      className="relative min-h-screen bg-cover bg-center flex"
      backgroundImage={`url(${heroImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box className="flex-1 flex flex-col justify-center">
        <ChakraMotionBox
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.7, ease: "easeOut" }}
          fontSize="2.3em"
          color="#FDC045"
          mb="1.2em"
          textAlign="center"
        >
        😎 EXPRESS YOURSELF WITH OUR CUSTOM TATTOOS AND EXPERT PIERCINGS 💉
        <Box className="flex">
            <Text>
        😊 At Mantra Tattoo Studio, we believe in turning your body into a canvas for self-expression. 🎨            </Text>
            <Box className="flex-1 flex justify-center items-center">
              <motion.div whileHover="hover" variants={buttonVariants}>
                <Button
                  backgroundColor="#FDC045"
                  color="white"
                  fontSize=".6em"
                  padding="0.5em 1em"
                  borderRadius="lg"
                  _hover={{ bg: "#ffc107", borderColor: "#ffc107" }}
                  onClick={handleBookNowClick} // Open the contact modal on click
                >
                  Book Now
                </Button>
              </motion.div>
            </Box>
            <Text
              className="flex-1"
              color="#FeCa0e"
            >
        🎨 Our team of talented artists specializes in creating stunning tattoos that reflect your unique style and personality. 💖 With years of experience and a passion for the art of tattooing, we are dedicated to providing our clients with top-quality work in a safe and welcoming environment. 🌟            </Text>
          </Box>
        </ChakraMotionBox>
      </Box>
      <Box bg="white" boxShadow="lg">
        <Artists />
      </Box>
      <Box bg="white"  boxShadow="lg">
        <MapContainer />
      </Box>
      <Box bg="white" boxShadow="lg">
        <BuyCoffee />
      </Box>
      <ContactForm isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </Box>
  );
};

export default LandingPage;

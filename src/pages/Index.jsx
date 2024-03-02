// Importing Chakra UI components and icons
import { Box, Container, Heading, Text, Button, Input, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaSearch, FaRobot } from "react-icons/fa";

const Index = () => {
  // Function to handle earthquake prediction (just a placeholder)
  const handlePredict = () => {
    // Show a notification to the user (this would be replaced with actual prediction logic)
    toast({
      title: "Prediction in progress...",
      description: "AI is analyzing the data to predict potential earthquakes.",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
  };

  // Toast is used to show notifications
  const toast = useToast();

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center">
            AI-Powered Earthquake Prediction <FaRobot />
          </Heading>
          <Text mt={4} fontSize="md" textAlign="center">
            Enter the parameters to predict potential earthquakes using advanced AI algorithms.
          </Text>
        </Box>

        <Box>
          <VStack spacing={4}>
            <Input placeholder="Enter latitude" />
            <Input placeholder="Enter longitude" />
            <Input placeholder="Enter depth (km)" />
            <Input placeholder="Enter magnitude range" />
            <HStack justify="center">
              <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handlePredict}>
                Predict Earthquake
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Results section (this would be dynamically loaded with actual prediction data) */}
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md" mb={2}>
            Prediction Results
          </Heading>
          <Text>The results of the earthquake prediction will be displayed here after the analysis.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

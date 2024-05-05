import { Container, Heading, Text, Box } from "@chakra-ui/react";

const TheaterListAndStack = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl">
        Theater List and Stack Module
      </Heading>
      <Text mt={4}>This module dynamically manages and allocates surgeries to different theaters.</Text>
      <Box mt={4}>
        <Text>Features include:</Text>
        <ul>
          <li>Real-time updates of theater availability and current surgery status.</li>
          <li>Integration with PACS for direct access to necessary imaging prior to surgeries.</li>
        </ul>
        <Text mt={4}>Synthetic Data Example:</Text>
        <Text>Visual representation of theater occupancy with different surgeries, showcasing how urgent cases are prioritized and allocated immediately.</Text>
      </Box>
    </Container>
  );
};

export default TheaterListAndStack;

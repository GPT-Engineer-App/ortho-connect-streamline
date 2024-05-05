import { Container, Heading, Text, Box } from "@chakra-ui/react";

const SurgeonScheduling = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl">
        Surgeon Scheduling Module
      </Heading>
      <Text mt={4}>This module manages and prioritizes surgeon schedules, integrating trauma cases into existing schedules.</Text>
      <Box mt={4}>
        <Text>Features include:</Text>
        <ul>
          <li>Calendar view of surgeon availability and booked slots.</li>
          <li>Automatic scheduling suggestions based on specialties and case urgencies.</li>
        </ul>
        <Text mt={4}>Synthetic Data Example:</Text>
        <Text>Mock schedule showing surgeons assigned to various types of cases (red, yellow, green) throughout the week.</Text>
      </Box>
    </Container>
  );
};

export default SurgeonScheduling;

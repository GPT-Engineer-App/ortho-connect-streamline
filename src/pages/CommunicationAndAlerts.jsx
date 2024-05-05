import { Container, Heading, Text, Box } from "@chakra-ui/react";

const CommunicationAndAlerts = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl">
        Communication and Alerts System
      </Heading>
      <Text mt={4}>This system sends real-time messages and automated alerts to hospital staff.</Text>
      <Box mt={4}>
        <Text>Features include:</Text>
        <ul>
          <li>Instant notifications for schedule changes or emergency alerts.</li>
          <li>Customizable alert settings per user role and preferences.</li>
        </ul>
        <Text mt={4}>Synthetic Data Example:</Text>
        <Text>Example alerts showing how a ‘red light’ case triggers immediate notifications to relevant surgeons and theater staff.</Text>
      </Box>
    </Container>
  );
};

export default CommunicationAndAlerts;

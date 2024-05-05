import { Container, VStack, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const PlatformOverview = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h2" size="xl">
          Platform Overview
        </Heading>
        <Text>OrthoStream is designed to integrate scheduling, communication, and documentation functionalities to enhance operational efficiency and patient experience.</Text>
        <Heading as="h3" size="lg">
          Core Modules
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Surgeon Scheduling Module - Manage and prioritize surgeon schedules effectively.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Theater List and Stack Module - Dynamic management of scheduled surgeries and theater allocations.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Communication and Alerts System - Real-time messaging and automated alerts for all stakeholders.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Patient Management and Tracking - Interface for tracking patient status and coordinating transportation.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Documentation and Reporting - Centralized system for entering and accessing surgical records.
          </ListItem>
        </List>
      </VStack>
    </Container>
  );
};

export default PlatformOverview;

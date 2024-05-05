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
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Integration with PACS - Enable secure, HIPAA-compliant access to medical images and X-rays within the hospital management system.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Traffic Light System - Implement a color-coded urgency indicator for surgeries to assist in prioritization and resource allocation.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Advanced Dashboards and Visualizations:
            <List spacing={2} pl={4}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Procedure Time Tracking and Analysis - Visualize the duration of various orthopedic procedures to optimize scheduling and resource use.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Resource Utilization Monitoring - Track and visualize the use of operating rooms, equipment, and personnel to identify inefficiencies and improve planning.
              </ListItem>
            </List>
          </ListItem>
        </List>
      </VStack>
    </Container>
  );
};

export default PlatformOverview;

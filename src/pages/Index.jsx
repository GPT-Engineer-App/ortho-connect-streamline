import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to OrthoStream
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Streamlining and automating the booking and operational processes in orthopedic departments.
        </Text>
        <Image src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0OTQ2MDcxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="OrthoStream Hero" boxSize="400px" objectFit="cover" borderRadius="lg" />
        <VStack spacing={4}>
          <Text fontSize="lg" textAlign="center">
            Discover how OrthoStream enhances coordination among surgical teams, theatre staff, and ward personnel.
          </Text>
          <Button rightIcon={<FaRocket />} colorScheme="blue" size="lg">
            Request a Free Demo
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;

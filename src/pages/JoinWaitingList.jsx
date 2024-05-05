import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function JoinWaitingList() {
  return (
    <Box p={5}>
      <Text fontSize="xl" mb={4}>Join Our Waiting List</Text>
      <Text mb={4}>Sign up to receive updates about our upcoming software suites and tools.</Text>
      <Button colorScheme="blue">Join Waiting List</Button>
    </Box>
  );
}

export default JoinWaitingList;
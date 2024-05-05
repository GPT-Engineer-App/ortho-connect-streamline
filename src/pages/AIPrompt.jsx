import React from "react";
import { Box, VStack, Input, Select, Textarea, Button, Heading } from "@chakra-ui/react";

const AIPrompt = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={4}>
        AI Interaction Prompt
      </Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="User ID" />
        <Select placeholder="Role">
          <option value="surgeon">Surgeon</option>
          <option value="nurse">Nurse</option>
          <option value="admin">Admin</option>
          <option value="patient">Patient</option>
        </Select>
        <Select placeholder="Action Type">
          <option value="create">Create</option>
          <option value="read">Read</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
          <option value="notify">Notify</option>
          <option value="query">Query</option>
        </Select>
        <Input placeholder="Subject" />
        <Textarea placeholder="Specific Details" />
        <Textarea placeholder="Contextual Information" />
        <Textarea placeholder="Expected Outcome" />
        <Button colorScheme="blue">Submit Prompt</Button>
      </VStack>
    </Box>
  );
};

export default AIPrompt;

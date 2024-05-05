import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>OrthoStream</Box>
        <Flex alignItems={"center"}>
          <Button as={Link} to="/" variant="ghost">
            Home
          </Button>
          <Button as={Link} to="/platform-overview" variant="ghost">
            Platform Overview
          </Button>
          <Button as={Link} to="/about-us" variant="ghost">
            About Us
          </Button>
          <Button as={Link} to="/ai-prompt" variant="ghost">
            AI Prompt
          </Button>
          <Button as={Link} to="/join-waiting-list" variant="ghost">
            Join Waiting List
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;

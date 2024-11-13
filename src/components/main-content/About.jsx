import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const About = () => {
  return (
    <Box mb={8} border={"1px solid #E6E6E6"} borderRadius={"8px"} w={"792px"} ml={"128px"}>
      <Heading size="md" padding={"10px"}>About</Heading>
      <Text color="gray.600" mt={2} padding={"10px"}>
        I am a passionate UI/UX Designer and Frontend Developer on a mission to
        craft digital experiences that leave a lasting impression. With a love
        for seamless design and clean code, I bring creativity and functionality
        together to transform ideas into captivating realities. Let's build
        something
        <strong> extraordinary.</strong>
      </Text>
    </Box>
  );
};

export default About;

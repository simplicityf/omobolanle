import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Heading size="md" padding={"10px"} fontWeight={"regular"}>
        About
      </Heading>
      <Text color="#8A8A8A" mt={2} padding={"10px"}>
        I am a passionate UI/UX Designer and Frontend Developer on a mission to
        craft digital experiences that leave a lasting impression. With a love
        for seamless design and clean code, I bring creativity and functionality
        together to transform ideas into captivating realities. Let's build
        something
        <strong> extraordinary.</strong>
      </Text>
      <Divider mt={"32px"} />
    </Box>
  );
};

export default About;

// There's something inherently satisfying about having an idea, visualizing that idea 
// and then coding it.
// It might be stressful but it's worth it 
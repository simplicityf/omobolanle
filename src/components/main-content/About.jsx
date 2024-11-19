import React from "react";
import { Box, Text, Heading ,Divider} from "@chakra-ui/react";

const About = () => {
  return (
    <Box >
      <Heading size="md" padding={"10px"}>
        About
      </Heading>
      <Text color="gray.600" mt={2} padding={"10px"}>
        I am a passionate UI/UX Designer and Frontend Developer on a mission to
        craft digital experiences that leave a lasting impression. With a love
        for seamless design and clean code, I bring creativity and functionality
        together to transform ideas into captivating realities. Let's build
        something
        <strong> extraordinary.</strong>
      </Text>
      <Divider my={"32px"} />
    </Box>
  );
};

export default About;

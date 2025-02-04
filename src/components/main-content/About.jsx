import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <Box>
      <Heading size="md" padding={"10px"} fontWeight={"regular"}>
        About
      </Heading>
      <Text color="#8A8A8A" mt={2} padding={"10px"}>
        <Typewriter
          words={[
            "There’s something profoundly satisfying about taking an idea, visualizing it, and then bringing it to life through code. While the process can be challenging, the reward of seeing it come to fruition makes every effort worthwhile. Whether I’m designing or developing, I always consider the needs of the team and anyone who might work with it in the future, ensuring clarity, functionality, and a seamless experience for all.",
          ]}
          loop={1}
          cursor={false}
          typeSpeed={50}
        />
      </Text>
      <Divider mt={"32px"} />
    </Box>
  );
};

export default About;

// There's something inherently satisfying about having an idea, visualizing that idea
// and then coding it.
// It might be stressful but it's worth it

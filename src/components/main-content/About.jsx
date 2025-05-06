import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <Box>
      <Heading color="white" size="md" padding={"10px"} fontWeight={"regular"}>
        About
      </Heading>
      <Text color="rgb(250, 229, 229)" mt={2} padding={"10px"}>
        <Typewriter
          words={[
            "Strategic and results-driven Software Engineer with specialized backend expertise developing production-ready solutions. Demonstrated success optimizing API performance, implementing cloud-based architectures, and delivering high-availability systems. Collaborative team player who excels at translating business needs into technical solutions.",
          ]}
          loop={1}
          cursor={false}
          typeSpeed={50}
        />
      </Text>

      <Divider my="32px" borderColor="rgb(214, 154, 244)" />
    </Box>
  );
};

export default About;
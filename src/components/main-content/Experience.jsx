import React from "react";
import { Box, Text, Heading, Badge, Flex, Image } from "@chakra-ui/react";
import ricamado from "../../assets/Images/ricamado.png";

const Experience = () => {
  return (
    <Box border={"1px solid #E6E6E6"} width={"792px"} borderRadius={"8px"} mt={"32px"} ml={"128px"}>
      <Heading size="md" padding={"10px"}>
        Experience
      </Heading>
      <Flex mt={4} align="center">
        <Image
          src={ricamado}
          boxSize="100px"
          objectFit="cover"
          mr={4}
          width={300}
          height={200}
        />
        <Box>
          <Text fontWeight="bold">
            UI/UX Designer · Ricamado Unique Limited
          </Text>
          <Text fontSize="sm" color="gray.500">
            March 2024 - Present
          </Text>
          <Text mt={2} color="gray.600">
            Spearheaded user-centric interface design, boosting user engagement
            by 20% through intuitive property search and listing interfaces.
            Conducted user research with 50+ participants, leading to 5 key UX
            improvements that increased average session duration by 30%.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple" mr={2}>
              Figma
            </Badge>
            <Badge colorScheme="teal" mr={2}>
              User Research
            </Badge>
            <Badge colorScheme="orange">User Interface</Badge>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Experience;

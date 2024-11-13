import { Box, Flex, Button, Text, Image, Icon } from "@chakra-ui/react";

// import { ExternalLinkIcon } from "@chakra-ui/icons";
import profilePicture from "../../assets/Images/profilePicture.png";
import exportIcon from "../../assets/Images/export.png";

export function Sidebar() {
  return (
    <Flex
      border={"1px solid #E6E6E6"}
      direction="column"
      alignItems={"center"}
      justifyContent={"center"}
      p={5}
      width={{ base: "384px", md: "300px" }}
      maxH={"35rem"}
      margin={"36px 0 36px 64px"}
      // position={"fixed"}
      borderRadius={"8px"}
      boxSize={"-moz-fit-content"}
    >
      <Box>
        <Image
          src={profilePicture}
          alt="profile pictre"
          mb={"8px"}
          mt={"40px"}
        />
      </Box>
      <Box padding="4px 10px" mt={"6px"}>
        <Text fontWeight="400px" fontSize="24px" color={"#333333"}>
          Oluwasegun Adeniyi
        </Text>
      </Box>
      <Box mt={"20px"} padding={"4px 10px"}>
        <Text
          fontSize="24px"
          color="#333333"
          textAlign="center"
          fontWeight={"light"}
        >
          UI/UX Designer <br /> Frontend Developer
        </Text>
      </Box>
      <Button
        variant="outline"
        mt={"32px"}
        colorScheme="gray"
        borderRadius={"8px"}
        fontSize={"14px"}
        rightIcon={<Image src={exportIcon} />}
      >
        About
      </Button>
      <Button
        variant="outline"
        colorScheme="gray"
        mt={"16px"}
        rightIcon={<Image src={exportIcon}/>}
      >
        Experience
      </Button>
      <Button
        variant="outline"
        colorScheme="gray"
        mt={"16px"}
        mb={"59px"}
        rightIcon={<Image src={exportIcon} />}
      >
        Get in Touch
      </Button>

      {/* <Image src={exportIcon} alt="icon" /> */}
    </Flex>
  );
}

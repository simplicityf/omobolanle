import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import profilePicture from "../../assets/Images/profilePicture.png";
import exportIcon from "../../assets/Images/export.png";
import { Link } from "react-scroll";

export function Sidebar() {
  const NavButton = ({ to, children }) => (
    <Button
      as={Link}
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      variant="outline"
      colorScheme="gray"
      borderRadius="8px"
      fontSize="14px"
      mt="16px"
      width="auto"
      rightIcon={<Image src={exportIcon} />}
    >
      {children}
    </Button>
  );

  const SidebarContent = () => (
    <Flex direction="column" align="center" w="full">
      <Box>
        <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
      </Box>
      <Box padding="4px 10px" mt="6px">
        <Text
          fontWeight="400"
          fontSize={{ base: "20px", md: "24px" }}
          color="#333333"
        >
          Oluwasegun Adeniyi
        </Text>
      </Box>
      <Box mt="20px" padding="4px 10px">
        <Text
          fontSize={{ base: "20px", md: "24px" }}
          color="#333333"
          textAlign="center"
          fontWeight="light"
        >
          UI/UX Designer <br /> Frontend Developer
        </Text>
      </Box>

      <NavButton to="about">About</NavButton>
      <NavButton to="experience">Experience</NavButton>
      <NavButton to="getintouch">Get in Touch</NavButton>
    </Flex>
  );

  return (
    <Box
      position={{ base: "relative", md: "fixed" }}
      top={{ base: "36px", md: "36px" }}
      left={{ base: "0", md: "32px", lg: "64px" }}
      transform={{ base: "none", md: "none" }}
      mb="36px"
      zIndex={10}
      mx={{ base: "auto", md: "0" }}
    >
      <Flex
        display="flex"
        alignItems="center"
        bg="#fff"
        border="1px solid #E6E6E6"
        borderRadius="8px"
        direction="column"
        height="calc(100vh - 60px)"
        justifyContent="center"
        p={5}
        width={{ base: "300px", lg: "384px" }}
      >
        <SidebarContent />
      </Flex>
    </Box>
  );
}

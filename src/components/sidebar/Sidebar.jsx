/* eslint-disable react/prop-types */
import { Box, Flex, Button, Text, Image, Icon } from "@chakra-ui/react";
import profilePicture from "../../assets/Images/profilePicture.png";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-scroll";
import Socials from "../main-content/socials";
import { Link as RouterLink } from "react-router-dom";

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
      fontWeight={"regular"}
      mt="16px"
      width="auto"
      rightIcon={<Icon as={FiExternalLink} color="white" />}
      color="white"
      _hover={{
        bg: "white",
        color: "gray.900",
        borderColor: "white",
      }}
    >
      {children}
    </Button>
  );

  const SidebarContent = () => (

    
    <Flex direction="column" align="center" w="full">
      <Box
        borderRadius="full"
        p="2"
        mt="16px"
      >
      <Box borderRadius="full" p="2" mt="16px">
  <RouterLink to="/profile-image">
    <Image
      src={profilePicture}
      alt="profile picture"
      boxSize="164px"
      borderRadius="full"
      objectFit="cover"
      objectPosition="center"
      transform="scale(1.2)"
      cursor="pointer"
    />
  </RouterLink>
</Box>

      </Box>
      <Box padding="4px 10px" mt="6px">
        <Text
          fontWeight="regular"
          fontSize={{ base: "20px", md: "24px" }}
          color="white"
        >
          Azeezat Omobolanle Nasir
        </Text>
      </Box>
      <Box mt="20px" padding="4px 10px">
        <Text
          fontSize={{ base: "20px", md: "24px" }}
          color="white"
          textAlign="center"
          fontWeight="light"
        >
          Software Developer/Engineer
        </Text>
      </Box>
  
      <NavButton to="experience">Experience</NavButton>
      <NavButton to="getintouch">Get in Touch</NavButton>
      <Socials/>
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
        bg="rgba(4, 4, 4, 0.87)"
        border="1px solid rgb(16, 15, 17)"
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

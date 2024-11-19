// import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link as ScrollLink } from "react-scroll";
// // import { useNavigate } from "react-router-dom";
// // import About from "../main-content/About";
// export function Sidebar() {
//   // const navigate = useNavigate();

//   return (
//     <Flex
//       alignItems="center"
//       bg="#fff"
//       border="1px solid #E6E6E6"
//       borderRadius="8px"
//       direction="column"
//       height="calc(100vh - 72px)"
//       justifyContent="center"
//       left="64px"
//       mb="36px"
//       p={5}
//       position="fixed"
//       top="36px" // Adds space above the sidebar
//       width={{ base: "384px", md: "300px" }}
//       zIndex="1"
//     >
//       <Box>
//         <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
//       </Box>
//       <Box padding="4px 10px" mt="6px">
//         <Text fontWeight="400px" fontSize="24px" color="#333333">
//           Oluwasegun Adeniyi
//         </Text>
//       </Box>
//       <Box mt="20px" padding="4px 10px">
//         <Text
//           fontSize="24px"
//           color="#333333"
//           textAlign="center"
//           fontWeight="light"
//         >
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//       </Box>
//       {/* about */}
//       <ScrollLink to="about" smooth={true} duration={500}>
//         <Button
//           variant="outline"
//           mt="32px"
//           colorScheme="gray"
//           borderRadius="8px"
//           fontSize="14px"
//           rightIcon={<Image src={exportIcon} />}
//         >
//           About
//         </Button>
//       </ScrollLink>

//       {/* experience */}
//       <ScrollLink to="experience" smooth={true} duration={500}>
//         <Button
//           borderRadius="8px"
//           colorScheme="gray"
//           mt="16px"
//           rightIcon={<Image src={exportIcon} />}
//           variant="outline"
//         >
//           Experience
//         </Button>
//       </ScrollLink>

//       {/* get in touch */}
//       <ScrollLink to="getintouch" smooth={true} duration={500}>
//         <Button
//           borderRadius="8px"
//           colorScheme="gray"
//           mb="4px"
//           mt="16px"
//           rightIcon={<Image src={exportIcon} />}
//           variant="outline"
//         >
//           Get in Touch
//         </Button>
//       </ScrollLink>
//     </Flex>
//   );
// }

// ---------------------------responsive
// import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";

// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link } from "react-scroll";

// export function Sidebar() {
//   const NavButton = ({ to, children }) => (
//     <Button
//       as={Link}
//       to={to}
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//       variant="outline"
//       colorScheme="gray"
//       borderRadius="8px"
//       fontSize="14px"
//       mt="16px"
//       width="auto"
//       rightIcon={<Image src={exportIcon} />}
//       // onClick={onClose}
//     >
//       {children}
//     </Button>
//   );

//   const SidebarContent = () => (
//     <Flex direction="column" align="center" w="full">
//       <Box>
//         <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
//       </Box>
//       <Box padding="4px 10px" mt="6px">
//         <Text
//           fontWeight="400"
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//         >
//           Oluwasegun Adeniyi
//         </Text>
//       </Box>
//       <Box mt="20px" padding="4px 10px">
//         <Text
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//           textAlign="center"
//           fontWeight="light"
//         >
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//       </Box>

//       <NavButton to="about">About</NavButton>
//       <NavButton to="experience">Experience</NavButton>
//       <NavButton to="contact">Get in Touch</NavButton>
//     </Flex>
//   );

//   return (
//     <>
//       <Flex
//         display={{ base: "flex", md: "flex" }}
//         alignItems={{ base: "center" }}
//         bg="#fff"
//         border="1px solid #E6E6E6"
//         borderRadius="8px"
//         direction="column"
//         height="calc(100vh - 72px)"
//         left={{ lg: "64px", md: "32px", base: "64px" }}
//         justifyContent={{ base: "center" }}
//         mb="36px"
//         p={5}
//         position="fixed"
//         top="36px"
//         width={{ base: "300px", lg: "384px" }}
//         zIndex="1"
//       >
//         <SidebarContent />
//       </Flex>
//     </>
//   );
// }

// ---------------working
// import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";

// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link } from "react-scroll";

// export function Sidebar() {
//   const NavButton = ({ to, children }) => (
//     <Button
//       as={Link}
//       to={to}
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//       variant="outline"
//       colorScheme="gray"
//       borderRadius="8px"
//       fontSize="14px"
//       mt="16px"
//       width="auto"
//       rightIcon={<Image src={exportIcon} />}
//       // onClick={onClose}
//     >
//       {children}
//     </Button>
//   );

//   const SidebarContent = () => (
//     <Flex direction="column" align="center" w="full">
//       <Box>
//         <Image src={profilePicture} alt="profile picture" mb="4px" mt="16px" />
//       </Box>
//       <Box padding="4px 10px" mt="6px">
//         <Text
//           fontWeight="400"
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//         >
//           Oluwasegun Adeniyi
//         </Text>
//       </Box>
//       <Box mt="20px" padding="4px 10px">
//         <Text
//           fontSize={{ base: "20px", md: "24px" }}
//           color="#333333"
//           textAlign="center"
//           fontWeight="light"
//         >
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//       </Box>

//       <NavButton to="about">About</NavButton>
//       <NavButton to="experience">Experience</NavButton>
//       <NavButton to="contact">Get in Touch</NavButton>
//     </Flex>
//   );

//   return (
//     <Box
//       position="fixed"
//       top="36px"
//       left={{ base: "50%", md: "32px", lg: "64px" }}
//       transform={{ base: "translateX(-50%)", md: "none" }}
//       mb="36px"
//       zIndex="1"
//     >
//       <Flex
//         display={{ base: "flex", md: "flex" }}
//         alignItems={{ base: "center" }}
//         bg="#fff"
//         border="1px solid #E6E6E6"
//         borderRadius="8px"
//         direction="column"
//         height="calc(100vh - 72px)"
//         justifyContent={{ base: "center" }}
//         p={5}
//         width={{ base: "300px", lg: "384px" }}
//       >
//         <SidebarContent />
//       </Flex>
//     </Box>
//   );
// }

// ----------------chat responsive

// import { Box, Flex, Button, Text, Image, IconButton, useDisclosure } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import profilePicture from "../../assets/Images/profilePicture.png";
// import exportIcon from "../../../dist/assets/export.png";
// import { Link as ScrollLink } from "react-scroll";
// import {  Link} from "react-scroll";

// export function Sidebar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       {/* Hamburger Menu for Medium Screens */}
//       {/* <IconButton
//         aria-label="Open Sidebar"
//         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//         display={{ base: "block", lg: "none" }}
//         position="fixed"
//         top="16px"
//         left="16px"
//         zIndex="2"
//         onClick={isOpen ? onClose : onOpen}
//       /> */}

//       {/* Sidebar Content */}
//       <Flex
//         alignItems="center"
//         bg="#fff"
//         border="1px solid #E6E6E6"
//         borderRadius="8px"
//         direction="column"
//         height={{ base: "auto", lg: "calc(100vh - 72px)" }}
//         justifyContent="center"
//         left={{ lg: "64px" }}
//         mb={{ base: "0", lg: "36px" }}
//         mt={{ base: "0", lg: "36px" }}
//         p={5}
//         position={{ base: "relative", lg: "fixed" }}
//         top={{ lg: "36px" }}
//         width={{ base: "100%", md:"300px" , lg: "300px" }}
//         zIndex="1"
//         overflow={{ base: "hidden", lg: "visible" }}
//         transition="width 0.3s ease"
//       >
//         {isOpen || window.innerWidth >= 992 ? (
//           <>
//             <Box>
//               <Image
//                 src={profilePicture}
//                 alt="profile picture"
//                 mb="4px"
//                 mt="16px"
//               />
//             </Box>
//             <Box padding="4px 10px" mt="6px">
//               <Text fontWeight="400px" fontSize="24px" color="#333333">
//                 Oluwasegun Adeniyi
//               </Text>
//             </Box>
//             <Box mt="20px" padding="4px 10px">
//               <Text
//                 fontSize="24px"
//                 color="#333333"
//                 textAlign="center"
//                 fontWeight="light"
//               >
//                 UI/UX Designer <br /> Frontend Developer
//               </Text>
//             </Box>
//             <ScrollLink to="about" smooth={true} duration={500}>
//               <Button
//                 variant="outline"
//                 mt="32px"
//                 colorScheme="gray"
//                 borderRadius="8px"
//                 fontSize="14px"
//                 rightIcon={<Image src={exportIcon} />}
//               >
//                 About
//               </Button>
//             </ScrollLink>
//             <ScrollLink to="experience" smooth={true} duration={500}>
//               <Button
//                 borderRadius="8px"
//                 colorScheme="gray"
//                 mt="16px"
//                 rightIcon={<Image src={exportIcon} />}
//                 variant="outline"
//               >
//                 Experience
//               </Button>
//             </ScrollLink>
//             <ScrollLink to="getintouch" smooth={true} duration={500}>
//               <Button
//                 borderRadius="8px"
//                 colorScheme="gray"
//                 mb="4px"
//                 mt="16px"
//                 rightIcon={<Image src={exportIcon} />}
//                 variant="outline"
//               >
//                 Get in Touch
//               </Button>
//             </ScrollLink>
//           </>
//         ) : null}
//       </Flex>
//     </>
//   );
// }


// ------------------------co pilot
import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import profilePicture from "../../assets/Images/profilePicture.png";
import exportIcon from "../../../dist/assets/export.png";
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
      left={{ base: '0', md: '32px', lg: '64px' }}
      transform={{ base: 'none', md: 'none' }}
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

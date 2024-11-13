// import {
//   Flex,
//   Box,
//   Heading,
//   Text,
//   Avatar,
//   Grid,
//   GridItem,
//   Stack,
//   Link,
//   VStack,
//   HStack,
//   Button,
//   Image,
// } from "@chakra-ui/react";
// import React from "react";
// // import { ColorModeSwitcher } from '../ColorModeSwitcher';
// import { ExternalLinkIcon } from "@chakra-ui/icons";
// import sg from "../assets/sgProfilePicture.png";

// const Home = () => {
//   return (
//     <Flex
//       p={8}
//       bg="gray.50"
//       minH="100vh"
//       alignItems="center"
//       justifyContent="center"
//     >
//       {/* Left Section */}
//       <VStack
//         w="30%"
//         p={8}
//         bg="white"
//         borderRadius="lg"
//         boxShadow="md"
//         align="center"
//         spacing={6}
//       >
//         <Image
//           borderRadius="full"
//           boxSize="100px"
//           src={sg}
//           alt="Profile Picture"
//         />
//         <Heading size="md" textAlign="center">
//           Oluwasegun Adeniyi
//         </Heading>
//         <Text textAlign="center" fontSize="sm">
//           UI/UX Designer <br /> Frontend Developer
//         </Text>
//         <VStack spacing={3} w="100%">
//           <Button variant="outline" rightIcon={<ExternalLinkIcon />}>
//             About
//           </Button>
//           <Button variant="outline" rightIcon={<ExternalLinkIcon />}>
//             Experience
//           </Button>
//           <Button variant="outline" rightIcon={<ExternalLinkIcon />}>
//             Get in Touch
//           </Button>
//         </VStack>
//       </VStack>

//       {/* Right Section */}
//       <VStack w="60%" ml={10} align="stretch">
//         {/* About Section */}
//         <Box>
//           <Heading size="md" mb={3}>
//             About
//           </Heading>
//           <Text fontSize="sm" color="gray.600" lineHeight="tall">
//             I am a passionate UI/UX Designer and Frontend Developer on a mission
//             to craft digital experiences that leave a lasting impression. With a
//             love for seamless design and clean code, I bring creativity and
//             functionality together to transform ideas into captivating
//             realities. Let’s build something <strong>extraordinary</strong>.
//           </Text>
//         </Box>

//         {/* Experience Section */}
//         <Box mt={8}>
//           <Heading size="md" mb={3}>
//             Experience
//           </Heading>
//           <Flex align="center" mb={3}>
//             <Image boxSize="50px" src={sg} alt="Company Logo" />
//             <Box ml={4}>
//               <Text fontSize="sm" fontWeight="bold">
//                 UI/UX Designer ・ Ricamado Unique Limited
//               </Text>
//               <Text fontSize="xs" color="gray.500">
//                 March 2024 - Present
//               </Text>
//               <Text fontSize="sm" mt={2} color="gray.600" lineHeight="tall">
//                 Spearheaded user-centric interface design, boosting user
//                 engagement by 20% through intuitive property search and listing
//                 interfaces. Conducted user research with 50+ participants,
//                 leading to 5 key UX improvements that increased average session
//                 duration by 30%.
//               </Text>
//             </Box>
//           </Flex>

//           {/* Tags */}
//           <HStack spacing={2} mt={3}>
//             <Button size="xs" variant="outline">
//               Figma
//             </Button>
//             <Button size="xs" variant="outline">
//               User Research
//             </Button>
//             <Button size="xs" variant="outline">
//               User Interface
//             </Button>
//           </HStack>
//         </Box>
//       </VStack>
//     </Flex>
//   );
// };

// export default Home;

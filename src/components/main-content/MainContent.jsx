import { Box } from "@chakra-ui/react";
import About from "./About";
import Experience from "./Experience";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

export const MainContent = () => {
  return (
    <Box
      ml={{ base: 0, md: "380px", lg: "480px", xl: "lg" }}
      p={5}
      width="auto"
      overflowY="auto"
      flex="1"
      bg="transparent"
    >
      <Box id="about" pt={{ base: 6, md: 6 }}>
        <About />
      </Box>
      <Box id="experience" pt={{ base: 6, md: 6 }}>
        <Experience />
        
      </Box>
      <Box id="getintouch" pt={{ base: 8, md: 8 }}>
        <GetInTouch />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainContent;


//  {showScrollButton && (
//   <IconButton
//   icon={<IoChevronUpCircleOutline />}
//   position="fixed"
//   bottom="8"
//   right={{ base: 4, md: 8 }}
//   size="lg"
//   colorScheme="blue"
//   shadow="xl"
//   display={{ base: "none", md: "block" }}
//   onClick={() => scroll.scrollToTop()}
//   aria-label="Scroll to top"
// />
// )}

{/* <IconButton
icon={<IoChevronUpCircleOutline />}
position="fixed"
bottom="8"
right={{ base: 4, md: 8 }}
size="lg"
colorScheme="blue"
shadow="xl"
onClick={() => scroll.scrollToTop()}
aria-label="Scroll to top"
/> */}
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/main-content/About";
import { Sidebar } from "./components/sidebar/Sidebar";
import Experience from "./components/main-content/Experience";
// import { MainContent } from "./components/main-content/MainContent";
import { Flex, Box, VStack, Container } from "@chakra-ui/react";

function App() {
  return (
    // <Container maxW="md" bg={"orange"}>
    <Router future={{ v7_relativeSplatPath: true }}>
      <Flex>
        {/* left section: sidebar */}
        <VStack>
          <Sidebar />
        </VStack>

        {/* right section: main content */}
        {/* <VStack>
          <Box
            marginLeft={{ base: "920px", md: "300px" }} // matches Sidebar width
            p={2}
            flex="1" // Makes the main content take up remaining space
            overflowY="auto" // Enables scrolling for the main content if needed
            mt={7}
          >
            <MainContent />
          </Box>
        </VStack> */}
      </Flex>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Experience />} />
      </Routes>
    </Router>
    // </Container>
  );
}

export default App;

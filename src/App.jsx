// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/main-content/About";
// import { Sidebar } from "./components/sidebar/Sidebar";
// import Experience from "./components/main-content/Experience";
// import { MainContent } from "./components/main-content/MainContent";
// import { Flex, Box, VStack } from "@chakra-ui/react";

// function App() {
//   return (
//     <Router future={{ v7_relativeSplatPath: true }}>
//       <Flex>
//         {/* left section: sidebar */}
//         <VStack>
//           <Sidebar />
//         </VStack>

//         {/* right section: main content */}
//         <VStack>
//           <Box
//             // flex="1" // Makes the main content take up remaining space
//             overflowY="auto" // Enables scrolling for the main content if needed
//           >
//             <MainContent />
//           </Box>
//         </VStack>
//       </Flex>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/main-content/About";
import { Sidebar } from "./components/sidebar/Sidebar";
import Experience from "./components/main-content/Experience";
import { MainContent } from "./components/main-content/MainContent";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <Sidebar />
        <MainContent />
      </Flex>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;

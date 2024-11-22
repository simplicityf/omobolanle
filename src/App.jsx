// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/main-content/About";
import { Sidebar } from "./components/sidebar/Sidebar";
import Experience from "./components/main-content/Experience";
import { MainContent } from "./components/main-content/MainContent";
import { Flex,Box } from "@chakra-ui/react";
import ScrollToTop from "./components/main-content/ScrollToTop";
import GetInTouch from "./components/main-content/GetInTouch";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <Box display={{base: "none", md: "block"}}>
          <ScrollToTop />
        </Box>
        <Sidebar />
        <MainContent />
      </Flex>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/getintouch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/main-content/About";
import { Sidebar } from "./components/sidebar/Sidebar";
import Experience from "./components/main-content/Experience";
import { MainContent } from "./components/main-content/MainContent";
import { Flex, Box } from "@chakra-ui/react";
import ScrollToTop from "./components/main-content/ScrollToTop";
import GetInTouch from "./components/main-content/GetInTouch";
import ProfileImage from "./components/profileImage";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  const isProfileImagePage = location.pathname === "/profile-image";

  return (
    <Box bg="rgba(31, 8, 54)" minH="100vh" w="100%">
      {isProfileImagePage ? (
        // Only show the image page content
        <Routes>
          <Route path="/profile-image" element={<ProfileImage />} />
        </Routes>
      ) : (
        <>
          <Flex direction={{ base: "column", md: "row", lg: "row" }}>
            <Box display={{ base: "none", md: "block" }}>
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
        </>
      )}
    </Box>
  );
}

export default AppWrapper;

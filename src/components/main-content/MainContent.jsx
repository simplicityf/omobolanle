import { Box } from "@chakra-ui/react";
import About from "./About";
import Experience from "./Experience";

export const MainContent = () => {
  return (
    <Box>
      <About />
      {/* <Divider my={4} borderColor="gray.300" /> */}
      <Box m={"32px 0 32px 128px"}>
        <hr />
      </Box>
      <Experience />
    </Box>
  );
};

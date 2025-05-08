import { Image, Box } from "@chakra-ui/react";
import profilePicture from "../assets/Images/profilePicture.png";

export default function ProfileImage() {
    return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bg="gray.900"
        >
          <Image
            src={profilePicture}
            alt="Large profile"
            maxW="80%"
            maxH="80vh"
            borderRadius="lg"
          />
        </Box>
    );
}

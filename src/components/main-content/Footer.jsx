import { useState, useEffect } from "react";
import {
  Flex,
  Link,
  IconButton,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <Box as="footer" p={"10px"} bg="gray.50" mt={8}>
    <Box as="footer" p={"10px"} mt={8}>
      {/* Links */}
      <Flex
        justifyContent="center"
        gap={2}
        wrap="wrap"
        fontSize="sm"
        color="gray.200"
        mb={4}
      >
        <span>·</span>
        <Link href="#experience">Experience</Link>
        <span>·</span>
        <Link href="#about">About</Link>
        <span>·</span>

        <Link href="#projects">Projects</Link>
      </Flex>

      {/* Logo and Social Media */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        gap={4}
        mt={8}
      >
        {/* Logo */}
       

        {/* Social Media Icons */}
        <Flex
                justifyContent="space-between"
                alignItems="center"
                direction={{ base: "column", md: "row" }}
                gap={4}
                mt={8}
            >


                {/* Social Media Icons */}
                <Flex gap={2}>
                    <Link href="https://github.com/simplicityf">
                        <IconButton
                            icon={<FaGithub />}
                            color="white"
                            variant="ghost"
                            aria-label="GitHub"
                        />
                    </Link>


                    <Link href="www.linkedin.com/in/omobolanlehazeezat">
                        <IconButton
                            icon={<FaLinkedin />}
                            color="white"
                            variant="ghost"
                            aria-label="LinkedIn"
                        />
                    </Link>


                    <Link href="https://x.com/AzeezatNasir">
                        <IconButton
                            icon={<FaXTwitter />}
                            color="white"
                            variant="ghost"
                            aria-label="X"
                        />
                    </Link>

                    <Link href="mailto:omobolanlehazeezat@gmail.com" isExternal>
                        <IconButton
                            icon={<FaEnvelope />}
                            color="white"
                            variant="ghost"
                            aria-label="Email"
                        />
                    </Link>

                    <Link href="https://wa.me/message/6A2YPIYQUMF7E1">
                        <IconButton
                            icon={<FaWhatsapp />}
                            color="white"
                            variant="ghost"
                            aria-label="WhatsApp"
                        />
                    </Link>
                </Flex>
            </Flex>
      </Flex>

      {/* Footer Text */}
      <VStack mt={4}>
        <Text fontSize="sm" color="gray.200" textAlign="center">
          © 2025 Azeezat Omobolanle Nasir. All rights reserved.
        </Text>
      </VStack>

      {showScrollButton && (
        <Box position="relative">
          <IconButton
            icon={<IoChevronUpCircleOutline />}
            position="fixed"
            bottom="8"
            right={{ base: 4, md: 8 }}
            size="lg"
            colorScheme="blue"
            shadow="xl"
            onClick={() => scroll.scrollToTop()}
            aria-label="Scroll to top"
          />
        </Box>
      )}
    </Box>
  );
};

export default Footer;

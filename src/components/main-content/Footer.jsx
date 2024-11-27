import React, { useState, useEffect } from "react";
import {
  Flex,
  Link,
  IconButton,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import sgLogo from "../../assets/Images/sgLogo.png";
import githubIcon from "../../assets/Images/mdi_github.png";
import dribbleIcon from "../../assets/Images/icon-park-outline_dribble.png";
import linkedlnIcon from "../../assets/Images/hugeicons_linkedin-01.png";
import xIcon from "../../assets/Images/akar-icons_x-fill.png";
import mailIcon from "../../assets/Images/iconoir_mail.png";
import whatsappIcon from "../../assets/Images/whatsapp.png";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300); // Show button after 300px scroll
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
        color="gray.600"
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
        <Box>
          <Image src={sgLogo} alt="Logo" />
        </Box>

        {/* Social Media Icons */}
        <Flex gap={2}>
          <Link href="https://github.com/SGTTW">
            <IconButton
              icon={<Image src={githubIcon} alt="GitHub" />}
              variant="ghost"
              aria-label="GitHub"
            />
          </Link>
          <Link href="https://dribbble.com/sg_ttw">
            <IconButton
              icon={<Image src={dribbleIcon} alt="Dribbble" />}
              variant="ghost"
              aria-label="Dribbble"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/oluwasegun-adeniyi-1844281b1/">
            <IconButton
              icon={<Image src={linkedlnIcon} alt="LinkedIn" />}
              variant="ghost"
              aria-label="LinkedIn"
            />
          </Link>
          <Link href="https://x.com/sg_ttw">
            <IconButton
              icon={<Image src={xIcon} alt="X (Twitter)" />}
              variant="ghost"
              aria-label="X (Twitter)"
            />
          </Link>
          <Link href="mailto:adeniyisegun025@gmail.com" isExternal>
            <IconButton
              icon={<Image src={mailIcon} alt="Mail" />}
              variant="ghost"
              aria-label="Mail"
            />
          </Link>
          <Link href="https://wa.me/+2348130713502">
            <IconButton
              icon={<Image src={whatsappIcon} alt="WhatsApp" />}
              variant="ghost"
              aria-label="WhatsApp"
            />
          </Link>
        </Flex>
      </Flex>

      {/* Footer Text */}
      <VStack mt={4}>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          © 2024 Oluwasegun Adeniyi. All rights reserved.
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

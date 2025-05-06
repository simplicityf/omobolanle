import {
    Flex,
    Link,
    IconButton,
    Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

const Socials = () => {

    return (

        <Box as="footer" p={"10px"} mt={8}>

            {/* Logo and Social Media */}
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


        </Box>
    );
};

export default Socials;

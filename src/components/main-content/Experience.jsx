/* eslint-disable react/prop-types */
import {
  Box,
  Text,
  Heading,
  Badge,
  Flex,
  Image,
  Divider,
  Icon
} from "@chakra-ui/react";
import bibuain from "../../assets/Images/bibuain.png";
import { TbArrowUpRight } from "react-icons/tb";
import projLum from "../../assets/Images/projLum.png";
import hngIntern from "../../assets/Images/hngIntern.png";
import nft_homepage from "../../assets/Images/nft_homepage.png";
import justblog_homepage from "../../assets/Images/justblog_homepage.png";
import simply_homepage from "../../assets/Images/simply_homepage.png";

const Experience = () => {

  const ExperienceItem = ({
    image,
    title,
    company,
    date,
    description,
    badges,
    link,
  }) => (
    <Box
      as="a"
      href={link}
      target="_self"
      rel="noopener noreferrer"
      transition="all 0.3s ease"
      color="rgb(250, 229, 229)"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textDecoration: "none",
      }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        mb="32px"
        align="start"
        gap="16px"

      >
        {/* Image and Badges */}
        <Box flexShrink={0} width={{ base: "100%", lg: "300px" }}>
          <Image
            src={image}
            alt={company}
            boxSize="100%"
            objectFit="cover"
            borderRadius="8px"
          />
          <Flex
            mt={4}
            justifyContent={{ base: "center", lg: "flex-start" }}
            wrap="wrap"
            gap="8px"

          >
            {badges.map((badge, index) => (
              <Badge
                key={index}
                colorScheme={badge.colorScheme}
                borderRadius={badge.borderRadius}
              >
                {badge.label}
              </Badge>
            ))}
          </Flex>
        </Box>
        <Box flex="1">
          <Flex align="center" justifyContent="space-between" mb="8px">
            <Text fontWeight="400">
              {title} · {company}
            </Text>
            <Icon as={TbArrowUpRight} boxSize={5} color="gray.300" />
          </Flex>
          <Flex align="baseline" gap="8px" mb="8px">
            <Text fontSize="sm" color="gray.300">
              {date}
            </Text>
          </Flex>
          <Text color="rgb(250, 229, 229)" mb="8px">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box borderRadius="8px" padding="16px">
      <Heading size="md" mb="16px" fontWeight={"regular"} color={"white"}>
        Experience
      </Heading>

      {/* Ricamado */}
      <ExperienceItem
        image={bibuain}
        title="Software Developer/Engineer"
        company="Bibuain Unique"
        date="March 2025 - Present"
        description="Led development team for an enterprise-grade cryptocurrency trading platform supporting Bitcoin and USDT transactions. Orchestrated full-stack implementation with primary focus on backend architecture while contributing to frontend development. Integrated third-party APIs (Paxful, Noones, Binance) to enable seamless live trading operations.
Engineered critical modules for real-time BTC/USDT exchange rate monitoring via Binance API, implementing automated trade assignment system with robust escalation protocols.
Architected and deployed secure API authentication framework ensuring protected vendor account integration while maintaining regulatory compliance."
        badges={[
          { label: "AWS App Runner", colorScheme: "blue", borderRadius: "full" },
          { label: "AWS Amplify", colorScheme: "purple", borderRadius: "full" },
          { label: "GitHub Actions", colorScheme: "gray", borderRadius: "full" },
          { label: "Supabase", colorScheme: "green", borderRadius: "full" },
          { label: "Node/Typscript", colorScheme: "green", borderRadius: "full" },
          {
            label: "React/Typescript",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={projLum}
        title="Backend Developer"
        company="Contract"
        date="March 2025"
        description="Architected and implemented proprietary authentication system for enterprise greenfield application, ensuring robust security standards and flexible user management.
Spearheaded migration from monolithic architecture to modular API-first design using Django REST Framework, enabling improved scalability and third-party integrations.
Engineered significant system optimization, reducing codebase complexity by 40% while enhancing maintainability, testability, and developer onboarding efficiency."
        badges={[
          { label: "Django REST Framework", colorScheme: "green", borderRadius: "full" },
          { label: "Django Database", colorScheme: "green", borderRadius: "full" }
        ]}

      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={hngIntern}
        title="Backend Engineer"
        company="HNG Internship"
        date="January 2025 - March 2025"
        description={`
Strategic Backend Engineer with specialized focus on API development and system architecture. Led multiple cross-functional projects delivering robust technical solutions.

Key Projects:

• Outbound AI — Engineered critical backend endpoints enabling user profile management and enterprise campaign orchestration. Collaborated across technical teams to enhance system reliability and service uptime.

• Open Source Contribution — Implemented critical functionality for blog engagement metrics, resolving community issues while maintaining industry best practices for database operations and version control.

• Performance Monitoring Solution — Architected comprehensive application monitoring system tracking latency and resource utilization with automated alert configuration. Deployed production-ready solution to cloud platform.

• Infrastructure Optimization — Established enterprise-grade CI/CD pipeline achieving 99.9% deployment reliability. Implemented NGINX reverse proxy configuration reducing response times to 200ms.
  `}
        badges={[
          { label: "FastAPI", colorScheme: "blue", borderRadius: "full" },
          { label: "PostgreSQL", colorScheme: "blue", borderRadius: "full" },
          { label: "Docker", colorScheme: "blue", borderRadius: "full" },
          { label: "GitHub Actions", colorScheme: "blue", borderRadius: "full" },
          { label: "Flask", colorScheme: "green", borderRadius: "full" },
          { label: "AWS EC2", colorScheme: "orange", borderRadius: "full" },
          { label: "NGINX", colorScheme: "purple", borderRadius: "full" },
        ]}
        link="https://hng.tech/internship"
      />

      <Divider mb="12px" borderColor="rgb(214, 154, 244)" />

      <Box id="projects" pt={{ base: 8, md: 8 }}>

        <Heading
          size="md"
          mb="16px"
          fontWeight={"regular"}
          color="white"
          id="projects"
        >
          Personal Projects
        </Heading>
      </Box>


      <ExperienceItem
        image={nft_homepage}
        title="Blockchain Developer"
        date="November 2024"
        description="Decentralized marketplace built on Sepolia testnet enabling direct artist-to-collector NFT transactions. Implemented smart contract integration and wallet connectivity for seamless token minting and management while eliminating intermediary fees."
        badges={[
          { label: "Solidity", colorScheme: "purple", borderRadius: "full" },
          { label: "Ethereum", colorScheme: "blue", borderRadius: "full" },
          { label: "Web3.js", colorScheme: "green", borderRadius: "full" },
          { label: "React", colorScheme: "teal", borderRadius: "full" },
          { label: "Pinata", colorScheme: "gray", borderRadius: "full" },
        ]}
      />

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />


      <ExperienceItem
        image={justblog_homepage}
        title="Full stack Engineer"
        date="October 2024"
        description="Feature-rich content management platform with robust authentication, role-based permissions, and media handling. Architected with scalability in mind, incorporating third-party integrations for enhanced security, analytics, and performance optimization."
        badges={[
          { label: "Node.js", colorScheme: "green", borderRadius: "full" },
          { label: "MongoDB", colorScheme: "green", borderRadius: "full" },
          { label: "Express", colorScheme: "blue", borderRadius: "full" },
          { label: "JWT", colorScheme: "red", borderRadius: "full" }
        ]}

      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />




      <ExperienceItem
        image={simply_homepage}
        title="Backend Engineer"
        date="January 2025"
        description="Subscription-based learning management system with tiered access control and intuitive course delivery. Implemented payment processing, content protection, and user progression tracking while maintaining enterprise-grade security and scalability standards."
        badges={[
          { label: "Python", colorScheme: "blue", borderRadius: "full" },
          { label: "Django", colorScheme: "green", borderRadius: "full" },
          { label: "PostgreSQL", colorScheme: "blue", borderRadius: "full" },
          { label: "Stripe", colorScheme: "purple", borderRadius: "full" },
          { label: "Neon", colorScheme: "purple", borderRadius: "full" }
        ]}
      />
      <Divider borderColor="rgb(214, 154, 244)" />


    </Box>
  );
};

export default Experience;

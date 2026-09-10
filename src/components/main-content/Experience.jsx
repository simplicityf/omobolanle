/* eslint-disable react/prop-types */
import {
  Box,
  Text,
  Heading,
  Badge,
  Flex,
  Image,
  Divider,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import bibuainvendor from "../../assets/Images/bibuainvendor.png";
import fastbuka from "../../assets/Images/fastbuka.png";
import realestate from "../../assets/Images/realestate.png";
import { TbArrowUpRight } from "react-icons/tb";
import projLum from "../../assets/Images/projLum.png";
import hngIntern from "../../assets/Images/hngIntern.png";
// import nft_homepage from "../../assets/Images/nft_homepage.png";
// import justblog_homepage from "../../assets/Images/justblog_homepage.png";
// import simply_homepage from "../../assets/Images/simply_homepage.png";
import scent10 from "../../assets/Images/scent10.PNG";
import getwater from "../../assets/Images/getwater.png";
import nextpay from "../../assets/Images/nextpay.jpg";
import martha from "../../assets/Images/martha.png";

const Experience = () => {
  const ExperienceItem = ({
    image,
    title,
    company,
    date,
    bullets,
    badges,
    link,
  }) => (
    <Box
      as="a"
      href={link}
      target={link ? "_blank" : "_self"}
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
            justifyContent={{ base: "left", lg: "flex-start" }}
            wrap="wrap"
            gap="8px"
          >
            {badges.map((badge, index) => (
              <Badge
                key={index}
                colorScheme={badge.colorScheme}
                borderRadius={badge.borderRadius}
                px={3}
                py={1}
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
            {link && <Icon as={TbArrowUpRight} boxSize={5} color="gray.300" />}
          </Flex>
          {date && (
            <Flex align="baseline" gap="8px" mb="8px">
              <Text fontSize="sm" color="gray.300">
                {date}
              </Text>
            </Flex>
          )}
          <UnorderedList color="rgb(250, 229, 229)" spacing="6px" pl="4px">
            {bullets.map((bullet, index) => (
              <ListItem key={index}>{bullet}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box borderRadius="8px" padding="16px">
      <Heading size="md" mb="16px" fontWeight={"regular"} color={"white"}>
        Experience
      </Heading>

      <ExperienceItem
        image={fastbuka}
        title="Mid-level Software Engineer"
        company="Choppaddi"
        date="October 2025 - Present"
        bullets={[
          "Contributed to a comprehensive full-stack food delivery ecosystem spanning customer-facing apps, rider management, vendor portals, and CMS administration.",
          "Implemented server-side architecture with RESTful APIs and real-time integration for order tracking, authentication flows, dynamic menu management, and multi-vendor coordination.",
          "Designed accessible, responsive UI components following WCAG standards, improving user engagement and application performance.",
          "Collaborated with cross-functional teams to deliver scalable, business-critical features, maintaining code quality through testing, code reviews, and optimized deployment pipelines.",
        ]}
        badges={[
          {
            label: "NextJS/Typescript",
            colorScheme: "yellow",
            borderRadius: "full",
          },
          {
            label: "React/Typescript",
            colorScheme: "purple",
            borderRadius: "full",
          },
          { label: "Web Socket", colorScheme: "gray", borderRadius: "full" },
        ]}
        link="https://www.choppaddi.com"
      />

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={nextpay}
        title="Mid-level Software Engineer, Full Stack"
        company="Mgxresearch"
        date="May 2026 - August 2026"
        bullets={[
          "Architecting and leading development of a production-grade fintech platform from the ground up: a Go-based Banking-as-a-Service backend, a multi-tenant payment gateway, and three role-based Next.js applications for users, merchants, and admins.",
          "Designed the system architecture, data model, and service boundaries across authentication, banking, payments, and admin domains.",
          "Built secure JWT-based RBAC, core banking functionality (wallet creation, internal ledgers, P2P transfers, real-time notifications), and tiered KYC verification integrating NIN and BVN checks.",
          "Built merchant payment infrastructure spanning card payments, bank transfers, saved instruments, refunds, payouts, and API key rotation, plus webhook ingestion and payment reconciliation with HMAC signature validation across NIBSS and Interswitch/card-network rails.",
          "Delivered fraud-check, settlement, and card-vault-isolation microservices alongside admin tooling for transaction monitoring and fee control.",
        ]}
        badges={[
          { label: "Go", colorScheme: "blue", borderRadius: "full" },
          {
            label: "NextJS/TypeScript",
            colorScheme: "yellow",
            borderRadius: "full",
          },
          { label: "PostgreSQL", colorScheme: "blue", borderRadius: "full" },
          { label: "Docker", colorScheme: "blue", borderRadius: "full" },
          { label: "Kafka", colorScheme: "gray", borderRadius: "full" },
          { label: "Redis", colorScheme: "red", borderRadius: "full" },
          { label: "AWS", colorScheme: "orange", borderRadius: "full" },
          { label: "JWT", colorScheme: "purple", borderRadius: "full" },
        ]}
      />

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={martha}
        title="Software Engineer Intern (SIWES Purpose)"
        company="Cognito System"
        date="February 2026 - July 2026"
        bullets={[
          "Delivered backend services and production-ready frontend interfaces for Martha AI, an AI-powered helpline platform, translating Figma designs into intuitive user experiences.",
          "Integrated a new payment gateway into the billing platform alongside existing Paystack and Stripe workflows; designed the end-to-end subscription lifecycle, including trials, trial-to-paid conversion, reversion handling, and grace-period management.",
          "Built a transactional email system for checkout confirmations, trial expirations, invoices, and payment reminders using reusable templates, resolving recurring duplicate-delivery issues.",
          "Strengthened API security with role-based access control across billing, business, and subscription services, preventing unauthorized cross-business data access.",
          "Built AI-driven document generation for the platform's AI assistant and improved the resilience of OpenAI integrations through better error handling and rate-limit management.",
        ]}
        badges={[
          { label: "NodeJS", colorScheme: "green", borderRadius: "full" },
          { label: "ExpressJS", colorScheme: "gray", borderRadius: "full" },
          { label: "TypeScript", colorScheme: "blue", borderRadius: "full" },
          { label: "ReactJS", colorScheme: "teal", borderRadius: "full" },
          { label: "NextJS", colorScheme: "yellow", borderRadius: "full" },
          { label: "MongoDB", colorScheme: "green", borderRadius: "full" },
          { label: "Docker", colorScheme: "blue", borderRadius: "full" },
          { label: "AWS", colorScheme: "orange", borderRadius: "full" },
          { label: "OpenAI", colorScheme: "purple", borderRadius: "full" },
        ]}
        link="https://www.askmartha.ai"
      />

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={realestate}
        title="Mid-level Software Engineer"
        company="Bibuain Unique"
        date="March 2025 - November 2025"
        bullets={[
          "Contributed to building and scaling backend services for real estate and marketplace platforms, developing real-time notification systems, in-app messaging, and user rating features.",
          "Designed and implemented a microservices architecture with event-driven pipelines to support high-traffic operations and seamless user experiences.",
          "Collaborated with product and frontend teams to deliver performant API solutions, maintaining comprehensive documentation for developer accessibility and integration efficiency.",
        ]}
        badges={[
          { label: "Render", colorScheme: "yellow", borderRadius: "full" },
          { label: "FastAPI", colorScheme: "purple", borderRadius: "full" },
          { label: "MongoDB", colorScheme: "gray", borderRadius: "full" },
          {
            label: "FastAPI Redoc",
            colorScheme: "green",
            borderRadius: "full",
          },
          {
            label: "FastAPI Swagger UI",
            colorScheme: "blue",
            borderRadius: "full",
          },
        ]}
        link="https://www.bibuain.com"
      />
      <ExperienceItem
        image={bibuainvendor}
        title="Mid-level Software Engineer"
        company="Bibuain Unique"
        date="March 2025 - November 2025"
        bullets={[
          "Led the development team for an enterprise-grade cryptocurrency trading platform supporting Bitcoin and USDT transactions, with primary focus on backend architecture while contributing to frontend development.",
          "Integrated third-party APIs (Paxful, Noones, Binance) to enable seamless live trading operations.",
          "Engineered real-time BTC/USDT exchange rate monitoring via the Binance API and an automated trade-assignment system with escalation protocols.",
          "Architected and deployed a secure API authentication framework for protected vendor account integration while maintaining regulatory compliance.",
        ]}
        badges={[
          {
            label: "AWS App Runner",
            colorScheme: "blue",
            borderRadius: "full",
          },
          { label: "AWS Amplify", colorScheme: "purple", borderRadius: "full" },
          {
            label: "GitHub Actions",
            colorScheme: "gray",
            borderRadius: "full",
          },
          { label: "Supabase", colorScheme: "green", borderRadius: "full" },
          {
            label: "Node/Typscript",
            colorScheme: "green",
            borderRadius: "full",
          },
          {
            label: "React/Typescript",
            colorScheme: "gray",
            borderRadius: "full",
          },
          {
            label: "Nextjs/Typscript",
            colorScheme: "green",
            borderRadius: "full",
          },
          { label: "Redis", colorScheme: "blue", borderRadius: "full" },
          { label: "Render", colorScheme: "yellow", borderRadius: "full" },
        ]}
        link="https://www.bibuain.com"
      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={getwater}
        title="Lead Software Engineer"
        company="Driink Water"
        // date="Contract"
        bullets={[
          "Developed and deployed a scalable backend system for a water utility application, designing secure database configurations across multiple environments.",
          "Implemented role-based access control and authentication mechanisms to ensure data security and proper user permissions.",
          "Established automated deployment pipelines to streamline release cycles and maintain system reliability.",
          "Created thorough API documentation to facilitate future maintenance and integration efforts.",
        ]}
        badges={[
          {
            label: "NodeJS/Javascript",
            colorScheme: "blue",
            borderRadius: "full",
          },
          { label: "Render", colorScheme: "yellow", borderRadius: "full" },
          {
            label: "GitHub Actions",
            colorScheme: "gray",
            borderRadius: "full",
          },
          { label: "Prisma", colorScheme: "green", borderRadius: "full" },
          { label: "Swagger UI", colorScheme: "green", borderRadius: "full" },
          {
            label: "Web Socket",
            colorScheme: "purple",
            borderRadius: "full",
          },
        ]}
      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={projLum}
        title="Backend Developer"
        date="Contract"
        bullets={[
          "Architected and implemented a proprietary authentication system for an enterprise greenfield application, ensuring robust security standards and flexible user management.",
          "Spearheaded migration from a monolithic architecture to a modular, API-first design using Django REST Framework, enabling improved scalability and third-party integrations.",
          "Engineered system optimization that reduced codebase complexity by 40%, enhancing maintainability, testability, and developer onboarding efficiency.",
        ]}
        badges={[
          {
            label: "Django REST Framework",
            colorScheme: "green",
            borderRadius: "full",
          },
          {
            label: "Django Database",
            colorScheme: "green",
            borderRadius: "full",
          },
        ]}
      />

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={scent10}
        title="Full stack Engineer"
        company="Sent By Anike"
        date="Contract"
        bullets={[
          "Developed a full-stack e-commerce platform for perfume retail with end-to-end order management.",
          "Built customer-facing features including product browsing, shopping cart, checkout, and real-time order tracking.",
          "Implemented an administrative dashboard for inventory management, order history, and order-status updates throughout the fulfillment lifecycle.",
          "Designed intuitive interfaces for both customer and admin portals to support seamless workflows.",
        ]}
        badges={[
          { label: "PHP", colorScheme: "blue", borderRadius: "full" },
          { label: "SQL", colorScheme: "yellow", borderRadius: "full" },
          { label: "Domain King", colorScheme: "gray", borderRadius: "full" },
          { label: "CSS", colorScheme: "purple", borderRadius: "full" },
        ]}
      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={hngIntern}
        title="Backend Engineer"
        company="HNG Internship"
        bullets={[
          "Outbound AI — Engineered backend endpoints enabling user profile management and enterprise campaign orchestration; collaborated across technical teams to enhance system reliability and service uptime.",
          "Open Source Contribution — Implemented functionality for blog engagement metrics, resolving community issues while maintaining best practices for database operations and version control.",
          "Performance Monitoring Solution — Architected an application monitoring system tracking latency and resource utilization with automated alert configuration; deployed to a cloud platform.",
          "Infrastructure Optimization — Established a CI/CD pipeline achieving 99.9% deployment reliability; implemented NGINX reverse proxy configuration, reducing response times to 200ms.",
        ]}
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

      {/*
        Personal Projects — commented out until real GitHub/live-demo links
        are available. Unlinked project entries read as unverifiable claims,
        so keep this hidden until links can be added back in.

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

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
        bullets={[
          "Built a decentralized marketplace on the Sepolia testnet enabling direct artist-to-collector NFT transactions.",
          "Implemented smart contract integration and wallet connectivity for token minting and management, eliminating intermediary fees.",
        ]}
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
        bullets={[
          "Built a feature-rich content management platform with robust authentication, role-based permissions, and media handling.",
          "Architected for scalability, incorporating third-party integrations for security, analytics, and performance optimization.",
        ]}
        badges={[
          { label: "Node.js", colorScheme: "green", borderRadius: "full" },
          { label: "MongoDB", colorScheme: "green", borderRadius: "full" },
          { label: "Express", colorScheme: "blue", borderRadius: "full" },
          { label: "JWT", colorScheme: "red", borderRadius: "full" },
        ]}
      />
      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <ExperienceItem
        image={simply_homepage}
        title="Backend Engineer"
        bullets={[
          "Built a subscription-based learning management system with tiered access control and intuitive course delivery.",
          "Implemented payment processing, content protection, and user-progression tracking with enterprise-grade security and scalability.",
        ]}
        badges={[
          { label: "Python", colorScheme: "blue", borderRadius: "full" },
          { label: "Django", colorScheme: "green", borderRadius: "full" },
          { label: "PostgreSQL", colorScheme: "blue", borderRadius: "full" },
          { label: "Stripe", colorScheme: "purple", borderRadius: "full" },
          { label: "Neon", colorScheme: "purple", borderRadius: "full" },
        ]}
      />
      */}
      <Divider borderColor="rgb(214, 154, 244)" />
    </Box>
  );
};

export default Experience;

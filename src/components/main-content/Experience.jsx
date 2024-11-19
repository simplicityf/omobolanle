import React from "react";
import {
  Box,
  Text,
  Heading,
  Badge,
  Flex,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import ricamado from "../../assets/Images/ricamado.png";
import exportIcon from "../../assets/Images/export.png";
import projLum from "../../assets/Images/projLum.png";
import hngIntern from "../../assets/Images/hngIntern.png";
import todoApp from "../../assets/Images/todoApp.png";
import decoration from "../../assets/Images/decoration.png";
import finTrack from "../../assets/Images/finTrack.png";
import oldPort from "../../assets/Images/oldPort.png";
import resume from "../../../src/oluwasegunAdeniyiResume.pdf"

const Experience = () => {
  const ExperienceItem = ({
    image,
    title,
    company,
    date,
    description,
    badges,
  }) => (
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
            <Badge key={index} colorScheme={badge.colorScheme}>
              {badge.label}
            </Badge>
          ))}
        </Flex>
      </Box>

      {/* Details */}
      <Box flex="1">
        <Flex align="center" justifyContent="space-between" mb="8px">
          <Text fontWeight="bold">
            {title} · {company}
          </Text>
          <Image src={exportIcon} alt="Export" />
        </Flex>
        <Flex align="baseline" gap="8px" mb="8px">
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
        </Flex>
        <Text color="gray.600" mb="8px">
          {description}
        </Text>
      </Box>
    </Flex>
  );

  return (
    <Box borderRadius="8px" padding="16px">
      <Heading size="md" mb="16px">
        Experience
      </Heading>

      {/* Ricamado */}
      <ExperienceItem
        image={ricamado}
        title="UI/UX Designer"
        company="Ricamado Unique Limited"
        date="March 2024 - Present"
        description="Spearheaded user-centric interface design, boosting user engagement by 20% through intuitive property search and listing interfaces. Conducted user research with 50+ participants, leading to 5 key UX improvements that increased average session duration by 30%."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      {/* Sidmach */}
      <ExperienceItem
        image={projLum}
        title="Frontend Developer"
        company="Sidmach Technologies"
        date="Oct 2023 - July 2024"
        description="Collaborated with the developers to build responsive UI components using react.js."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      {/* HNG */}
      <ExperienceItem
        image={hngIntern}
        title="Frontend Developer"
        company="HNG"
        date="March 2024 - Present"
        description="HNG Internship is a fast-paced bootcamp for learning digital skills. Converted 15+ design mock-ups into fully functional, responsive web interfaces."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      <Button mt={4} variant="outline" gap={2} href={resume} as={"a"}>
        See Résumé
        <Image src={exportIcon} alt="resume" />
      </Button>

      <Divider my="32px" />

      <Heading size="md" mb="16px">
        Personal Projects
      </Heading>

      {/* Todo App */}
      <ExperienceItem
        image={todoApp}
        title="Frontend Development"
        company="Todo App"
        date="March 2024 - Present"
        description="Todo apps are common, but many users still struggle with task management and productivity. I focused on creating a more effective and user-friendly todo app."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      {/* Decoration */}
      <ExperienceItem
        image={decoration}
        title="UI/UX Designer"
        company="Decoration: Curated Contemporary Furniture"
        date="March 2024 - Present"
        description="Decoration is a sleek, user-centric e-commerce platform specializing in modern furniture and home decor. This project showcases a clean, minimalist design that puts the focus on beautifully crafted furniture pieces."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      {/* FinTrack */}
      <ExperienceItem
        image={finTrack}
        title="Frontend Development · UI/UX Designer"
        company="FinTrack: Your personal finance companion"
        date="March 2024 - Present"
        description="FinTrack is a user-friendly budget application designed to help individuals take control of their finances. This app offers a comprehensive suite of features to track income, expenses, and savings goals, all within an intuitive interface."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      {/* Old Portfolio */}
      <ExperienceItem
        image={oldPort}
        title="Frontend Development · UI/UX Designer"
        company="Old Portfolio"
        date="March 2024 - Present"
        description="My earlier portfolio served as a solid foundation, showcasing my initial projects and skill growth, focusing on UI/UX design and frontend development."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      />

      <Button mt={4} variant="outline" gap={2}>
        View more projects
        <Image src={exportIcon} alt="view more projects" />
      </Button>

      <Divider my="32px" />

      {/* Pig Game
      <ExperienceItem
        image={projLum}
        title="Frontend Development"
        company="Pig Game"
        date="March 2024 - Present"
        description="Pig Game is an interactive two-player dice game built entirely with vanilla JavaScript, HTML, and CSS. This project showcases front-end development skills and the ability to implement complex game logic."
        badges={[
          { label: "Figma", colorScheme: "purple" },
          { label: "User Research", colorScheme: "teal" },
          { label: "User Interface", colorScheme: "orange" },
        ]}
      /> */}
    </Box>
  );
};

export default Experience;

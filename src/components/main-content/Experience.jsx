import React, { useState } from "react";
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
import resume from "../../../src/oluwasegunAdeniyiResume.pdf";
import weather from "../../../src/assets/Images/weather.png";
import blogPost from "../../../src/assets/Images/blogPost.png";
import { IoChevronUpSharp, IoChevronDownSharp } from "react-icons/io5";

const Experience = () => {
  const [seeMoreProjects, setSeeMoreProjects] = useState(false);

  const handleSeeMoreProjects = () => {
    setSeeMoreProjects(!seeMoreProjects);
  };

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
      target="_blank"
      rel="noopener noreferrer"
      transition="all 0.3s ease"
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
        {/* Details */}
        <Box flex="1">
          <Flex align="center" justifyContent="space-between" mb="8px">
            <Text fontWeight="400">
              {title} · {company}
            </Text>
            <Image src={exportIcon} alt="Export" />
          </Flex>
          <Flex align="baseline" gap="8px" mb="8px">
            <Text fontSize="sm" color="gray.400">
              {date}
            </Text>
          </Flex>
          <Text color="#8A8A8A" mb="8px">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box borderRadius="8px" padding="16px">
      <Heading size="md" mb="16px" fontWeight={"regular"} color={"#333333"}>
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
          { label: "Figma", colorScheme: "gray", borderRadius: "full" },
          { label: "User Research", colorScheme: "gray", borderRadius: "full" },
          {
            label: "User Interface",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://ricamado.netlify.app/"
      />
      <Divider mb={"32px"} />

      {/* Sidmach */}
      <ExperienceItem
        image={projLum}
        title="Frontend Developer"
        company="Sidmach Technologies"
        date="Oct 2023 - July 2024"
        description="Collaborated with the developers to build responsive UI components using react.js."
        badges={[
          { label: "Chakra UI", colorScheme: "gray", borderRadius: "full" },
          { label: "React.js", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Redux",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://sidmach.com/"
      />
      <Divider mb={"32px"} />

      {/* HNG */}
      <ExperienceItem
        image={hngIntern}
        title="Frontend Developer"
        company="HNG"
        date="March 2024 "
        description="HNG Internship is a fast-paced bootcamp for learning digital skills. Converted 15+ design mock-ups into fully functional, responsive web interfaces."
        badges={[
          {
            label: "React.js",
            colorScheme: "gray",
            borderRadius: "full",
          },
          { label: "Next.js", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Redux",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://hng.tech/internship"
      />

      <Button
        mt={4}
        variant="outline"
        gap={2}
        href={resume}
        as={"a"}
        fontWeight={"regular"}
      >
        See Résumé
        <Image src={exportIcon} alt="resume" />
      </Button>

      <Divider my="32px" />
      <Box id="projects" pt={{ base: 8, md: 8 }}>
        {/* This will be inside the Experience component */}
        <Heading
          size="md"
          mb="16px"
          fontWeight={"regular"}
          color={"#333333"}
          id="projects"
        >
          Personal Projects
        </Heading>
      </Box>

      {/* Todo App */}
      <ExperienceItem
        image={todoApp}
        title="Frontend Development"
        company="Todo App"
        date="Jan 2024 "
        description="Todo apps are common, but many users still struggle with task management and productivity. I focused on creating a more effective and user-friendly todo app."
        badges={[
          { label: "React.js", colorScheme: "gray", borderRadius: "full" },
          { label: "Chakra UI", colorScheme: "gray", borderRadius: "full" },
          {
            label: "Firebase",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://todosnoteapp.netlify.app/"
      />

      <Divider mb={"32px"} />

      {/* Decoration */}
      <ExperienceItem
        image={decoration}
        title="UI/UX Designer"
        company="Decoration: Curated Contemporary Furniture"
        date="March 2024 "
        description="Decoration is a sleek, user-centric e-commerce platform specializing in modern furniture and home decor. This project showcases a clean, minimalist design that puts the focus on beautifully crafted furniture pieces."
        badges={[
          { label: "Figma", colorScheme: "gray", borderRadius: "full" },
          { label: "User Research", colorScheme: "gray", borderRadius: "full" },
          {
            label: "User Interface",
            colorScheme: "gray",
            borderRadius: "full",
          },
        ]}
        link="https://dribbble.com/shots/25229776-modern-furniture-decoration?new_shot_upload=true"
      />
      <Divider mb={"32px"} />

      {/* FinTrack */}
      <ExperienceItem
        image={finTrack}
        title="Frontend Development · UI/UX Designer"
        company="FinTrack: Your personal finance companion"
        date="April 2024 "
        description="FinTrack is a user-friendly budget application designed to help individuals take control of their finances. This app offers a comprehensive suite of features to track income, expenses, and savings goals, all within an intuitive interface."
        badges={[
          { label: "Chakra UI", colorScheme: "gray" },
          { label: "React.js", colorScheme: "gray" },
          { label: "User Experience", colorScheme: "gray" },
        ]}
        link="https://fintrackerapp.netlify.app/"
      />
      <Divider mb={"32px"} />

      {/* Blog */}
      <ExperienceItem
        image={blogPost}
        title="Frontend Development"
        company="Blog management"
        date="Dec 2024"
        description="Streamline Your Stories – Effortless Blog Management Made Simple!"
        badges={[
          { label: "Tailwind CSS", colorScheme: "gray" },
          { label: "React.js", colorScheme: "gray" },
          { label: "Firebase", colorScheme: "gray" },
        ]}
        link="https://blog-management-app.netlify.app/"
      />
      {/* <Divider mb={"32px"} /> */}

      {/* View more button */}
      <Button
        mt={4}
        variant="outline"
        gap={2}
        onClick={handleSeeMoreProjects}
        as={"a"}
        fontWeight={"regular"}
      >
        {/* See More Projects */}
        {seeMoreProjects ? "See Less Projects" : "See More Projects"}
        {seeMoreProjects ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
      </Button>
      <Divider my={"32px"} />

      {seeMoreProjects && (
        <>
          {/* Weather App */}
          <ExperienceItem
            image={weather}
            title="Frontend Development"
            company="Weather App"
            date="Dec 2024 "
            description="Your Personal Weather Guide – Stay Ahead, Rain or Shine!"
            badges={[
              { label: "React.js", colorScheme: "gray", borderRadius: "full" },
              {
                label: "Tailwind CSS",
                colorScheme: "gray",
                borderRadius: "full",
              },
              {
                label: "Firebase",
                colorScheme: "gray",
                borderRadius: "full",
              },
            ]}
            link="https://weather-forecast-info-app.netlify.app/"
          />

          <Divider mb={"32px"} />
          {/* Old Portfolio */}
          <ExperienceItem
            image={oldPort}
            title="Frontend Development · UI/UX Designer"
            company="Old Portfolio"
            date="March 2024"
            description="My earlier portfolio served as a solid foundation, showcasing my initial projects and skill growth, focusing on UI/UX design and frontend development."
            badges={[
              { label: "Figma", colorScheme: "gray", borderRadius: "full" },
              { label: "Chakra UI", colorScheme: "gray", borderRadius: "full" },
              {
                label: "React.js",
                colorScheme: "gray",
                borderRadius: "full",
              },
            ]}
            link="https://sgttwportfolio.netlify.app/"
          />

          <Divider m={"32px 0 0 0"} />
        </>
      )}
    </Box>
  );
};

export default Experience;

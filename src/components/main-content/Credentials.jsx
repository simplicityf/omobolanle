import { Box, Text, Heading, Divider, Wrap, WrapItem, Badge, SimpleGrid } from "@chakra-ui/react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "Python", "PHP", "Solidity"],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Django REST Framework",
      "REST API Design",
      "WebSockets",
      "JWT / RBAC",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Chakra UI", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Neon"],
  },
  {
    category: "Infrastructure & Cloud",
    skills: [
      "AWS (App Runner, Amplify)",
      "Docker",
      "Kafka",
      "GitHub Actions",
      "Render",
    ],
  },
  {
    category: "Practices",
    skills: ["Microservices Architecture", "Agile & Scrum", "Version Control"],
  },
];

const education = [
  {
    degree: "B.Sc, Computer Science",
    institution: "National Open University of Nigeria (NOUN), Nigeria",
    date: "June 2018 - November 2026",
  },
  {
    degree: "Diploma, Blockchain Technology",
    institution: "Baze University, Nigeria",
    date: "February 2024 - February 2025",
  },
];

const certifications = [
  "IBM DevOps and Software Engineering — Coursera",
  "Google IT Automation with Python — Coursera",
  "Blockchain Development — Women in DeFi",
  "Full Stack Web Development — Udemy",
];

const Credentials = () => {
  return (
    <Box borderRadius="8px" padding="16px">
      <Heading size="md" mb="16px" fontWeight="regular" color="white">
        Skills
      </Heading>
      {skillGroups.map((group) => (
        <Box key={group.category} mb="16px">
          <Text fontSize="sm" color="gray.400" mb="8px">
            {group.category}
          </Text>
          <Wrap spacing="8px">
            {group.skills.map((skill) => (
              <WrapItem key={skill}>
                <Badge
                  colorScheme="purple"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontWeight="normal"
                  textTransform="none"
                >
                  {skill}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      ))}

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <Heading size="md" mb="16px" fontWeight="regular" color="white">
        Education
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px" mb="32px">
        {education.map((item) => (
          <Box key={item.degree}>
            <Text color="rgb(250, 229, 229)" fontWeight="500">
              {item.degree}
            </Text>
            <Text fontSize="sm" color="gray.300" mb="4px">
              {item.institution}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {item.date}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <Heading size="md" mb="16px" fontWeight="regular" color="white">
        Certifications
      </Heading>
      <Box as="ul" mb="32px" pl="20px" color="rgb(250, 229, 229)">
        {certifications.map((cert) => (
          <Text as="li" key={cert} mb="8px">
            {cert}
          </Text>
        ))}
      </Box>

      <Divider mb="32px" borderColor="rgb(214, 154, 244)" />

      <Heading size="md" mb="16px" fontWeight="regular" color="white">
        Languages
      </Heading>
      <Text color="rgb(250, 229, 229)">English (Proficient) · Yoruba (Proficient)</Text>

      <Divider mt="32px" borderColor="rgb(214, 154, 244)" />
    </Box>
  );
};

export default Credentials;

import { Box, Button, Container, Typography } from "@mui/material";

import aefd from "../assets/american-english-for-devs.jpg";
import dancePartner from "../assets/american-english-for-devs.jpg";
import langfaring from "../assets/american-english-for-devs.jpg";
import iris from "../assets/american-english-for-devs.jpg";
import snake from "../assets/american-english-for-devs.jpg";
import codingMuse from "../assets/american-english-for-devs.jpg";
import stackCards from "../assets/american-english-for-devs.jpg";

function Portfolio(props) {
  const projects = [
    {
      title: "Tech English - American English for Devs",
      description: "English Language-Learning Site for Tech Professionals",
      image: aefd,
      techStack:
        "React.js, TypeScript, Chakra UI, Next.js, PostgreSQL, Playwright, Jest, Nodemailer API, PayPal API, Vercel",
      github: "",
      live: "americanenglishfordevs.com",
    },
    {
      title: "Dance Partner",
      description: "Mobile App for Learning Dances from Around the World",
      image: dancePartner,
      techStack: "",
      github: "https://github.com/CodingCashew/dance-partner",
      live: "",
    },
    {
      title: "Language Faire",
      description: "Language Blog",
      image: langfaring,
      techStack: "",
      github: "https://github.com/CodingCashew/language-faire-language-blog",
      live: "https://langfaring.com/",
    },
    {
      title: "Iris Web Scraper",
      description: "Scraper for Iris Data",
      image: iris,
      techStack: "",
      github: "https://github.com/CodingCashew/irises",
      live: "",
    },
    {
      title: "Snake",
      description: "Classic Snake Game",
      image: snake,
      techStack: "Java",
      github: "https://github.com/CodingCashew/Snake",
      live: "",
    },
    {
      title: "Coding Muse Coffee",
      description: "E-commerce Site for Lovers of Artisan Coffee",
      image: codingMuse,
      techStack: "React, Node.js/Express, PostgreSQL, Material-UI",
      github: "https://github.com/CodingCashew/coding-muse-coffee",
      live: "",
    },
    {
      title: "StackCards",
      description: "Flashcard App for Developers",
      image: stackCards,
      techStack: "React, Node.js/Express, PostgreSQL, Material-UI",
      github: "https://github.com/CodingCashew/stackcards",
      live: "",
    },
  ];
  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary.dark" sx={{ mb: "2rem" }}>
          My Recent Work
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 100%",
                maxWidth: { xs: "100%", md: "45%" },
                boxShadow: 3,
                padding: 2,
                marginBottom: 5,
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                color="secondary.dark"
              >
                {project.title}
              </Typography>
              <Box
                component="img"
                width="100%"
                boxShadow={3}
                alt="photo of e-commerce coffee site"
                src={aefd}
              />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                marginTop="1rem"
              >
                {project.description}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {project.techStack}
              </Typography>
              <Box>
                {project.github && (
                  <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 1, marginRight: 1 }}
                    href={project.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code
                  </Button>
                )}
                {project.live && (
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{ marginTop: 1, backgroundColor: "secondary.dark" }}
                    href={project.live}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View Site
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}

export default Portfolio;

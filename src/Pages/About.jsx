import { Box, Container, Typography } from "@mui/material";

import code from "../assets/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg";

function About() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      maxWidth="xl"
      sx={{ gap: 7 }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: { xs: "90%", sm: "75%", md: "60%", lg: "40%" },
          marginLeft: { xs: 0, md: "2rem" },
          marginTop: { xs: "0", md: 3 },
          boxShadow: 5,
        }}
        alt="computer code"
        src={code}
      />
      <Container>
        <Typography
          variant="h3"
          color="secondary.main"
          margin="1rem"
          className="content"
        >
          About Me
        </Typography>
        <Typography
          variant="h6"
          color="primary.dark"
          margin="1rem"
          className="content"
        >
          Hi, I’m Elizabeth—a dedicated full-stack software developer with a
          passion for creating engaging, user-centric web applications. With
          experience in React, Angular, Next.js, and Node.js, I thrive on
          building solutions that are not only functional but also intuitive and
          accessible. Whether I’m refining a user interface or optimizing
          backend performance, I focus on writing clean, efficient, and
          maintainable code.
        </Typography>
        <Typography
          variant="h6"
          color="primary.dark"
          margin="1rem"
          className="content"
        >
          Beyond coding, I’m constantly learning and staying current with
          emerging technologies. My recent journey includes diving deeper into
          AWS services and exploring DevOps practices to enhance deployment
          processes. I believe in collaboration, continuous improvement, and
          using technology to solve meaningful problems.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;

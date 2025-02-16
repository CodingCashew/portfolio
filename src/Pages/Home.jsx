import { FaArrowRight } from "react-icons/fa6";

import { Button, Container, Link, Typography } from "@mui/material";

function Home(props) {
  return (
    <Container>
      <Typography variant="h1" color="primary.dark">
        Hi, I'm Elizabeth.
      </Typography>
      <Typography variant="h4" maxWidth="sm" marginTop={3}>
        I'm a Software Developer with a passion for building cool things and
        solving complex problems.
      </Typography>
      <Link href="/portfolio" marginTop={3}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.main", marginTop: "2rem" }}
        >
          Check out my work
          <FaArrowRight />
        </Button>
      </Link>
    </Container>
  );
}

export default Home;

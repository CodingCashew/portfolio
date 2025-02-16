import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

function Navbar(props) {
  const primary = props.theme.palette.primary.dark;
  return (
    <nav>
      <ul className="NavbarItems" sx={{ display: "inline-flex" }}>
        <Link to="/" className="title">
          <Typography variant="h5" color="secondary.dark">
            Elizabeth Harris
          </Typography>
        </Link>
        <Link to="/about" className="pages">
          <Typography variant="h6" color="secondary.dark" className="pages">
            About
          </Typography>
        </Link>
        <Link to="/portfolio" className="pages">
          <Typography variant="h6" color="secondary.dark" className="pages">
            Portfolio
          </Typography>
        </Link>
        <div className="links">
          <a
            href="https://github.com/CodingCashew"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub className="links" size={35} style={{ color: primary }} />
          </a>
          <a
            href="https://www.linkedin.com/in/lizharris285/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin
              className="links"
              size={35}
              style={{ color: primary }}
            />
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

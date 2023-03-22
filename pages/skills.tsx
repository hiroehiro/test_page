import React from "react";
import { Box, Typography } from "@mui/material";

const Skills: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1" align="center">
        My Skills
      </Typography>
      <Box mt={4}>
        <Typography variant="h2">Next.js Level 2</Typography>
        <Typography variant="body1">
          I have experience building websites with Next.js, including
          server-side rendering, API routes, and dynamic routing.
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h2">Typescript Level 2</Typography>
        <Typography variant="body1">
          I have experience using Typescript in both frontend and backend
          development, including type-safe API calls, type definitions, and
          more.
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h2">Python Level 4</Typography>
        <Typography variant="body1">
          I am proficient in Python and have experience building web
          applications, data analysis tools, and automation scripts.
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-5px)",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
  },
});

const Skills: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={8}>
      <Typography variant="h1" color="primary" gutterBottom>
        My Skills
      </Typography>
      <StyledCard>
        <Typography variant="h2" color="secondary">
          Next.js Level 2
        </Typography>
        <Typography variant="body1" align="center">
          I have experience building websites with Next.js, including
          server-side rendering, API routes, and dynamic routing.
        </Typography>
      </StyledCard>
      <StyledCard>
        <Typography variant="h2" color="secondary">
          Typescript Level 2
        </Typography>
        <Typography variant="body1" align="center">
          I have experience using Typescript in both frontend and backend
          development, including type-safe API calls, type definitions, and
          more.
        </Typography>
      </StyledCard>
      <StyledCard>
        <Typography variant="h2" color="secondary">
          Python Level 4
        </Typography>
        <Typography variant="body1" align="center">
          I am proficient in Python and have experience building web
          applications, data analysis tools, and automation scripts.
        </Typography>
      </StyledCard>
    </Box>
  );
};

export default Skills;

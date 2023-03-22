import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1" align="center">
        Welcome to my portfolio!
      </Typography>
      <Box display="flex" justifyContent="center" mt={4}>
        <Link href="/skills">
          <Button variant="contained" size="large">
            My Skills
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;

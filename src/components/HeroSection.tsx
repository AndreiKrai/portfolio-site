import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import face from "../assets/face.jpg";

const HeroSection = () => {
  const fullText = "Weelcome to my site!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]); // Use previous state
      index++;
      if (index === fullText.length-1) {
        clearInterval(interval); // Stop updating once all letters are added
      }
    }, 150); // Adjust timing for effect speed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content
          justifyContent: "center",
          width: "100%", // Ensure container takes full width
        }}
      >
        <img
          src={face}
          alt="Welcome"
          style={{
            maxWidth: "100%", // Image scales with container
            height: "auto", // Maintains aspect ratio
            marginBottom: "16px", // Space between image and text
            marginTop: "10px",
          }}
        />
        <Typography variant="h3" sx={{ color: "black", textAlign: "center" }}>
          {displayedText}
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;

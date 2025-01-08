import React, { useEffect, useState } from "react";
import { Box, Container, Fade, Typography } from "@mui/material";
import face from "../assets/face.jpg";

const HeroSection = () => {
  const fullText = "Weelcome to my site!";
  const [displayedText, setDisplayedText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the component on mount
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]); // Use previous state
      index++;
      if (index === fullText.length - 1) {
        clearInterval(interval); // Stop updating once all letters are added
      }
    }, 150); // Adjust timing for effect speed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [visible]);
  return (
    <Container
    // sx={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)", // Bottom shadow
    //   backgroundColor: "white", // Ensure the container has a background to make the shadow visible
    //  // marginBottom: "4px", // Optional for spacing
    //   }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content
          justifyContent: "center",
          width: "100%", // Ensure container takes full width
          pb: 2,
        }}
      >
        <Fade in={visible} timeout={{ appear: 1000, enter: 1000, exit: 1500 }}>
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
        </Fade>
        <Typography variant="h3" sx={{ color: "black", textAlign: "center" }}>
          {displayedText}
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;

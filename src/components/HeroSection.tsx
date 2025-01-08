import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Fade, Typography } from "@mui/material";
import face from "../assets/face.jpg";
import { useTheme } from "../hooks/useTheme.tsx";
import { ThemeContext } from "../context/themeContext.tsx";
import { MainContext } from "../context/mainContext.tsx";

const HeroSection = () => {
  const fullText = "Weelcome to my site!";
  const [displayedText, setDisplayedText] = useState("");
  // const [isMounted, setIsMounted] = useState(false);
  const context = useContext(ThemeContext);
  const mountContext = useContext(MainContext);

  if (!mountContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { isMounted ,setIsMounted} = mountContext;
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {

    // Show the component on mount
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("__________",isMounted);
    if (!displayedText) {
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]); // Use previous state
      console.log("__________+");

      index++;
      if (index === fullText.length - 1) {
        clearInterval(interval); // Stop updating once all letters are added
      }
    }, 150); // Adjust timing for effect speed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [displayedText,isMounted]);

  return (
    <Container    >
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
        <Fade
          in={isMounted}
          timeout={{ appear: 1000, enter: 1000, exit: 1500 }}
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
        </Fade>
        <Typography variant="h3" sx={{ color: "black", textAlign: "center" }}>
          {displayedText}
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;

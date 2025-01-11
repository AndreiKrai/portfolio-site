import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Fade, Typography } from "@mui/material";
import face from "../assets/face.jpg";
import { useNavigation } from "../context/navigationContext.tsx";

const HeroSection = () => {
  const fullText = "Welcome to my site!";
  const [displayedText, setDisplayedText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const { isMounted } = useNavigation();

  useEffect(() => {
    if (!isMounted) {
      setShowImage(false);
      return;
    } else {
      setTimeout(() => {
        setShowImage(true);
      }, 1000);
    }
  }, [isMounted]);

  // useEffect(() => {
  //   console.log("__________", isMounted);
  //   if (!isMounted) {
  //     return;
  //   }
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     if (index < fullText.length) {
  //       setDisplayedText((prev) => prev + fullText[index]);
  //       index++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 500); // Adjust the speed of the typing effect here
  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, [displayedText, isMounted]);
  useEffect(() => {
    setTimeout(()=>{},1000)
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the interval when the text is fully displayed
      }
    }, 500); // Adjust typing speed in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fullText]);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content
          justifyContent: "center",
          width: "100%", // Ensure container takes full width
          pb: 2,
          pt:{ xs: "62px", md: "92px"}
        }}
      >
        <Fade
          in={showImage}
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

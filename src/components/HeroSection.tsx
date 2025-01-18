import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Fade, Typography } from "@mui/material";
import face from "../assets/me-1.png";
import { useNavigation } from "../context/navigationContext.tsx";

const HeroSection = () => {
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

  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content
          justifyContent: "center",
          width: "100%", // Ensure container takes full width
           minHeight:{xs:"197px", sm:"331px", md:"384px",lg:"483px"},
          pb: 2,
          pt: { xs: "62px", md: "92px" },
        }}
      >
        <Fade
          in={showImage}
          timeout={{ appear: 1000, enter: 1000, exit: 1500 }}
        >
          <Box
          component="img"
            src={face}
            alt="Welcome"
            sx={{
              maxWidth:{xs:"100%",md:"70%"}, // Image scales with container
              height: "auto", // Maintains aspect ratio
              marginBottom: "16px", // Space between image and text
              marginTop: "10px",
            }}
          />
        </Fade>
        <Typography
          sx={{
            position: {xs:"relative",md:"absolute"},
            zIndex:3,
            top: {xs:"0",md:"140px"},
            right: {xs:"0",md:"120px"},
            color: "black",
            textAlign: "center",
            fontSize: { xs: "30px", md: "48px" },
            fontWeight:700
          }}
        >
          Welcome to my page
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;

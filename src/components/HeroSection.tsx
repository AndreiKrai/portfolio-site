import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Fade, Typography } from "@mui/material";
import face from "../assets/face.jpg";
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content
          justifyContent: "center",
          width: "100%", // Ensure container takes full width
          pb: 2,
          pt: { xs: "62px", md: "92px" },
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
        <Typography sx={{ color: "black", textAlign: "center",fontSize:{xs:"32px",md:"48px"} }}>
          Welcome to my page
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;

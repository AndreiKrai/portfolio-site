import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import face from "../assets/face.jpg";
import { useNavigation } from "../context/navigationContext.tsx";
import { techList } from "../navigationData.ts";

const Hero2 = () => {
  const fullText = "Welcome to my site!";
  const [displayedText, setDisplayedText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const { isMounted } = useNavigation();
  const [techToShow, setTechToShow] = useState([]);


  useEffect(() => {
    if (!isMounted) {
      setShowImage(false);
      return;
    } else {
        showTech(techList)
      setTimeout(() => {
        setShowImage(true);
      }, 1000);
    }
  }, [isMounted]);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the interval when the text is fully displayed
      }
    }, 500); // Adjust typing speed in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fullText]);

  const showTech = (techList: string[]) => {
    techList.forEach((tech, index) => {
      setTimeout(() => {
        setTechToShow((prev) => [...prev, tech]);
      }, index * 50); // Add a delay for each tech based on its position
    });
  };

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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
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
          </Grid>
          <Grid item xs={12} sm={4} sx={{textAlign:"left"}}>
            <Typography
              variant="h5"
              sx={{ color: "black",  }}
            >
              Technologies i've worked with
            </Typography>
            {techToShow.map((i) => (
              <Typography
                variant="h5"
                sx={{ color: "gray",ml:2 }}
              >
                {i}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Fade
          in={showImage}
          timeout={{ appear: 1000, enter: 1000, exit: 1500 }}
        >
          <Box sx={{ display: "flex", flex: 1, direction: "rtl" }}>
            <Box sx={{ width: "30%" }}>
              <Typography
                variant="inherit"
                sx={{ color: "black", textAlign: "center" }}
              >
                Welcome to my page
              </Typography>
            </Box>
          </Box>
        </Fade>
        <Typography variant="h3" sx={{ color: "black", textAlign: "center" }}>
          Welcome to my page
        </Typography>
      </Box>
    </Container>
  );
};

export default Hero2;

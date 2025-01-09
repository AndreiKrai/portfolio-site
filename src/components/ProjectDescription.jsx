import { Box, Grid, Slide, Typography } from "@mui/material";
import React from "react";
import img from "../assets/main.jpg";

export default function ProjectDescription() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} >
        <Slide
          direction="right"
          in={true}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          sx={{mx: "42px", mt:{md:"84px"}} }
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ color: "black", textAlign: "start",my:2 }}
            >
              displayedText
            </Typography>
            <Box
              sx={{
                flex: 1,
                height: "2px",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                mb:4
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: "black", textAlign: "start" }}
            >
              displayedText Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsa, ipsum officia in consequuntur, animi odit voluptatibus ex dolorem nulla similique facilis aliquid molestias? Omnis molestiae suscipit dolore eaque molestias.
            </Typography>
          </Box>
        </Slide>
      </Grid>
      <Grid item xs={12} md={6}>
        <Slide
          direction="left"
          in={true}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <Box>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: "16px",
                marginTop: "10px",
              }}
            />
          </Box>
        </Slide>
      </Grid>
    </Grid>
  );
}

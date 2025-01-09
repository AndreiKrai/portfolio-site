import { Box, Fade, Grid } from "@mui/material";
import React from "react";
import img from "../assets/web-ex.jpg";

export default function TwoImagesInRow() {
  return (
    <Fade in={true} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
      <Box sx={{ mx: "36px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius:"8px"
                // marginBottom: "16px",
                // marginTop: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius:"8px"
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}

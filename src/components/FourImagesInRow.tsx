import { Box, Fade, Grid } from "@mui/material";
import React from "react";
import img from "../assets/app-ex.png";
import { useNavigation } from "../context/navigationContext.tsx";

export default function FourImagesInRow() {
  const { isMounted } = useNavigation();

  return (
    <Fade in={isMounted} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
      <Box sx={{ mx: "36px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                // marginBottom: "16px",
                // marginTop: "10px",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                // marginBottom: "16px",
                // marginTop: "10px",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                // marginBottom: "16px",
                // marginTop: "10px",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src={img}
              alt="Welcome"
              style={{
                maxWidth: "100%",
                height: "auto",
                // marginBottom: "16px",
                // marginTop: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}

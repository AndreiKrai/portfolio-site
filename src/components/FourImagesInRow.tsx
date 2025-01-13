import { Box, Fade, Grid } from "@mui/material";
import React from "react";
import img from "../assets/";
import { useNavigation } from "../context/navigationContext.tsx";
import { CardData } from "../navigationData.ts";

interface FourImagesInRowProps {
  details: CardData;
}

export default function FourImagesInRow({details}:FourImagesInRowProps) {
  const { isMounted } = useNavigation();
  return (
   <Fade in={isMounted} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
      <Box sx={{ mx: "36px" }}>
        <Grid container spacing={2}>
          {details.screenshorts.map ((src, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <img
                src={src}
                alt={` ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>  );
}

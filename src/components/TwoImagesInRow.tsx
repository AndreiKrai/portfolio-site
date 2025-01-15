import { Box, Fade, Grid } from "@mui/material";
import React from "react";
import { useNavigation } from "../context/navigationContext.tsx";
import { CardData } from "../navigationData.ts";

interface TwoImagesInRowProps {
  details: CardData;
}
export default function TwoImagesInRow({details}:TwoImagesInRowProps) {
  const { isMounted } = useNavigation();

  return (
    details.screenshorts && (
      <Box>
        <Fade in={isMounted} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
          <Box sx={{ mx: "36px" }}>
            <Grid container spacing={2}>
              {details.screenshorts.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <img
                    src={item}
                    alt={`Screenshot ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      borderWidth: "1.5px",
                      borderColor: "#d6d6d6",
                      borderStyle: "solid",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Box>
    ))
}

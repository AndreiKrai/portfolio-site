import { Box, Fade, Typography } from "@mui/material";
import React from "react";
import { useNavigation } from "../context/navigationContext.tsx";

export default function TextBlock({}) {
  const { isMounted } = useNavigation();

  return (
    <Fade in={isMounted} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          mx: "36px",
          mt: "64px",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            variant="h3"
            sx={{ color: "black", textAlign: "start", mb: 1 }}
          >
            displayedText
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: "2px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              mb: 4,
            }}
          />
          <Typography
            variant="caption"
            sx={{ color: "black", textAlign: "start" }}
          >
            displayedText Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Qui ipsa, ipsum officia in consequuntur, animi odit
            voluptatibus ex dolorem nulla similique facilis aliquid molestias?
            Omnis molestiae suscipit dolore eaque molestias.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

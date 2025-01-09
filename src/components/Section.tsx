import { Box, Container, Typography } from "@mui/material";
import React from "react";

interface SectionProps {
  isLight: boolean;
  title?: string;
  children: React.ReactNode;
  paddingBottom?: number;
}

export default function Section({
  isLight,
  title,
  children,
  paddingBottom = 94,
}: SectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: isLight ? "white" : "rgb(240, 240, 240)",
        boxShadow: "inset 0px 10px 10px -10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container
        sx={{ paddingTop: "94px", paddingBottom: `${paddingBottom}px` }}
      >
        {title && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2, // Space between the text and the lines
              mb: 3,
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: "2px",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                display: { xs: "none", sm: "block" }, // Hide lines on small screens
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "rgb(117, 117, 117)",
                textAlign: "center",
                whiteSpace: "nowrap", // Prevent text from wrapping
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                flex: 1,
                height: "2px",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                display: { xs: "none", sm: "block" }, // Hide lines on small screens
              }}
            />
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}

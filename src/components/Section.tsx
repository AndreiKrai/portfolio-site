import { Container, Typography } from "@mui/material";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
export default function Section({ title, children }: SectionProps) {
  return (
    <Container sx={{ backgroundColor: "rgb(250, 250, 250)", paddingY: "94px",boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}>
      <Typography
        variant="h6"
        sx={{mb:4, color: "rgb(117, 117, 117)", textAlign: "center" }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
}

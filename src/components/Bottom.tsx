import { Box, Container, MenuItem, Typography } from "@mui/material";
import React from "react";
import { pages } from "../navigationData.ts";

export default function Bottom() {
  return (
    <Box sx={{        boxShadow: "inset 0px 10px 10px -10px rgba(0, 0, 0, 0.3)",
      backgroundColor: "rgb(245, 245, 245)" }}>
    <Container
      sx={{ px: 6, pt: "32px",pb:"16px"}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
          mx: 4,
        }}
      >
        <Typography
          sx={{ textAlign: "center", color: "text.secondary" }}
          variant="body2"
        >
          © Okraichenko Andrii
        </Typography>
        <Box sx={{display:"flex"}}>
          {pages.map((page) => (
            <MenuItem key={page.title}>
              <Typography
                sx={{ textAlign: "center", color: "text.secondary" }}
                variant="body2"
              >
                {page.title}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Box>
    </Container></Box>
  );
}

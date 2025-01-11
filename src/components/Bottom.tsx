import { Box, Container, MenuItem, Typography } from "@mui/material";
import React from "react";
import { pages } from "../navigationData.ts";
import { useNavigation } from "../context/navigationContext.tsx";

export default function Bottom() {
  const {  navigateTo } = useNavigation();

  return (
    <Box
      sx={{
        boxShadow: "inset 0px 10px 10px -10px rgba(0, 0, 0, 0.3)",
        backgroundColor: "rgb(245, 245, 245)",
      }}
    >
      <Container sx={{ px: 6, pt: "32px", pb: "16px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: {xs:"center",md:"space-between"},
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <MenuItem key={page.title}>
                <Typography
                  sx={{ textAlign: "center", color: "text.secondary" }}
                  variant="body2"
                >
                  {page.title}
                </Typography>
              </MenuItem>
            ))} */}
             {pages.map((page) => {
                const clickHandler =
                  navigateTo[page.onClick as keyof typeof navigateTo];
                return (
                  <MenuItem
                    key={page.title}
                    onClick={clickHandler}
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    <Typography sx={{textAlign: "center", color: "text.secondary"  }}>
                      {page.title}
                    </Typography>
                  </MenuItem>
                );
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

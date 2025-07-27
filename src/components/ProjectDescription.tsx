import { Box, Button, Grid, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigation } from "../context/navigationContext.tsx";
import { CardData } from "../navigationData.ts";

interface ProjectDescriptionProps {
  details: CardData;
}
export default function ProjectDescription({
  details,
}: ProjectDescriptionProps) {
  const { isMounted, navigateTo } = useNavigation();
  const [delayedMounted, setDelayedMounted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isMounted) {
      timeout = setTimeout(() => setDelayedMounted(true), 500);
    } else {
      setDelayedMounted(false);
    }
    return () => clearTimeout(timeout);
  }, [isMounted]);

  return (
    <Grid container spacing={2} sx={{minHeight:{xs:"100vh",md:"840px"} }}>
      <Grid item xs={12} md={6}>
        <Slide
          direction="right"
          in={delayedMounted}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <Box sx={{ mx: "42px",pb:{xs:4,md:0},height:"100%", display: "flex", justifyContent: "center",alignItems:"center" }}>
            <img
              src={details.descriptionImage}
              alt="Welcome"
              style={{
                width: "100%",
                maxWidth: "475px",
                height: "auto",
                // marginBottom: "16px",
                marginTop: "10px",
              }}
            />
          </Box>
        </Slide>
      </Grid>     
       <Grid item xs={12} md={6}>
        <Slide
          direction="left"
          in={delayedMounted}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <Box sx={{ display: "flex",height:"100%", alignContent: "center", alignItems:"center" }}>
            <Box sx={{ mx: "42px" }}>
              <Typography
                variant="h3"
                sx={{fontSize:{xs:"32px",md:"48px"}, color: "black", textAlign: "start", my: 2 }}
              >
                {details.title}
              </Typography>
              {/* technologies */}
              <Typography variant="body1" sx={{ fontWeight: "bold" ,}}>
                Technologies I worked with on the project:{" "}
                <Typography component="span" sx={{ color: "GREY" }}>
                  {details.technology}
                </Typography>{" "}
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  height: "2px",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  mb: 4,
                  mt: 1,
                }}
              />
              <Typography
                variant="caption"
                sx={{ color: "black", textAlign: "start",fontSize:"16px" }}
              >
                {details.projectReview}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: {
                    xs: "space-between",
                    sm: "start",
                  },
                  mt: 2,
                  pb: 4,
                }}
              >
                {details.link && (
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "black", mr: 2 }}
                    onClick={() =>
                      navigateTo.externalLink(details.link as string)
                    }
                  >
                    Go to project
                  </Button>
                )}
                {typeof details.gitLink === "string" && (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "black" }}
                    onClick={() =>
                      navigateTo.externalLink(details.gitLink as string)
                    }
                  >
                    Github
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Slide>
      </Grid>
    </Grid>
  );
}

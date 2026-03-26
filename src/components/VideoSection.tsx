import { Box, Fade } from "@mui/material";
import React from "react";
import { useNavigation } from "../context/navigationContext.tsx";
import { CardData } from "../navigationData.ts";

interface VideoSectionProps {
  details: CardData;
}

export default function VideoSection({ details }: VideoSectionProps) {
  const { isMounted } = useNavigation();

  if (!details.video) return null;

  return (
    <Fade in={isMounted} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
      <Box sx={{ mx: "36px" }}>
        <video
          controls
          autoPlay
          muted
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            borderWidth: "1.5px",
            borderColor: "#d6d6d6",
            borderStyle: "solid",
          }}
        >
          {details.video.webm && (
            <source src={details.video.webm} type="video/webm" />
          )}
          <source src={details.video.mp4} type="video/mp4" />
        </video>
      </Box>
    </Fade>
  );
}

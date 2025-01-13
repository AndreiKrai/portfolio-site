import { Box } from "@mui/material";
import React from "react";
import Grid2 from "@mui/material/Grid2";
import ActionAreaCard from "./Card.tsx";
import { CardData } from "../navigationData.ts";

interface CardGridProps {
  list: CardData[];
}

export default function CardGrid({ list }: CardGridProps) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {}
        {list.map((value) => (
          <Grid2 key={value.title} item>
            <ActionAreaCard item={value} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

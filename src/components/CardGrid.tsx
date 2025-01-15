import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "./Card.tsx";
import { CardData } from "../navigationData.ts";

interface CardGridProps {
  list: CardData[];
}

export default function CardGrid({ list }: CardGridProps) {  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {}
        {list.map((value) => (
          <Grid key={value.id} item>
            <ActionAreaCard data={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

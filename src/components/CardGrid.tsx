import { Box } from "@mui/material";
import React from "react";
import Grid2 from "@mui/material/Grid2";
import ActionAreaCard, { CardData } from "./Card.tsx";

const data: CardData[] = [
    {
        image: "../assets/contemplative-reptile.jpg",
        alt: "text",
        title: "Lizard",
        subtitle: "Lizards are a widespread group of",
        technology: "REACT | NODE.JS",
      },
];

export default function CardGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/*Render 3 empty black boxes as items of this container*/}
        {data.map((value) => (
          <Grid2 key={value} item>
            <ActionAreaCard item={value} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

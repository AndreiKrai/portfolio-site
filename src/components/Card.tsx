import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Chip  } from "@mui/material";
import { CardData } from "../navigationData";


interface ActionAreaCardProps {
  item: CardData;
}

export default function ActionAreaCard({ item }: ActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3 }}>
      <CardActionArea sx={{ p: 1 }}>
        <CardMedia
          component="img"
          height="160"
          image={item.image}
          alt={item.alt}
          sx={{ borderRadius: 2 }}
        />
        <CardContent sx={{ height: "90px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Chip label={item.chipTitle} color={item.chipColor} size="small" />
          </Box>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            {item.subtitle}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.technology}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

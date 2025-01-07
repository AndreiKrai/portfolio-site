import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export interface CardData {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  technology: string;
}

interface ActionAreaCardProps {
    item: CardData;
  }
  
export default function ActionAreaCard({ item }: ActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardActionArea sx={{ p: 1 }}>
        <CardMedia
          component="img"
          height="160"
          image={item.image}
          alt={item.alt}
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
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

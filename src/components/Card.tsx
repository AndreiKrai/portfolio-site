import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Chip, Fade } from "@mui/material";
import { CardData } from "../navigationData";
import { useNavigation } from "../context/navigationContext.tsx";

interface ActionAreaCardProps {
  data: CardData;
}

export default function ActionAreaCard({ data }: ActionAreaCardProps) {
  const {isMounted, navigateTo } = useNavigation()

  return (
    <Fade in={isMounted} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
      <Card
        sx={{ maxWidth: 300, borderRadius: 3 }}
        onClick={() => navigateTo.portfolio(data.id)}
      >
        <CardActionArea sx={{ p: 1 }}>
          <CardMedia
            component="img"
            height="160"
            image={data.image}
            alt={data.alt}
            sx={{ borderRadius: 2 }}
          />
          <CardContent sx={{ height: "90px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "black" }}
              >
                {data.title}
              </Typography>
              <Chip
                label={data.chipTitle}
                color={data.chipColor}
                size="small"
              />
            </Box>
            <Typography variant="subtitle2" sx={{ color:"black" ,}}>
              {data.subtitle}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {data.technology}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fade>
  );
}

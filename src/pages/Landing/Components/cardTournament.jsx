import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TournamentCard({name,description,imagen}) {
  return (
    <Card className="m-4" elevation={3} sx={{ maxWidth: 345 }} onClick={()=>{window.alert("Hola")}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="imagen torneo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
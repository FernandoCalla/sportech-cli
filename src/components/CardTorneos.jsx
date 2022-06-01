import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

import LabelSports from "./labelSports"

const CardsTournaments=({imagen,name,sport,id,ruta})=>{
    let navigate = useNavigate();
    return <Card className="m-4" elevation={3} sx={{ width: 245 ,height:245 }} onClick={()=>{navigate(`${ruta}${id}`)}}>
        <div className="w-full">
            <LabelSports name={sport}/>
        </div>
        <CardActionArea className="p-1">
        <CardMedia
            className="p-3"
            component="img"
            image={imagen}
            sx={{ width: 245 ,height:160 }}
            alt="imagen torneo"
        />
        <CardContent className="p-1">
            <center>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                
            </center>
        </CardContent>
        </CardActionArea>
  </Card>
}

export default CardsTournaments
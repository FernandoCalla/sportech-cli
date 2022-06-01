import { Avatar, Card, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const CardTeam=({name,imagen,id})=>{    
    let navigate = useNavigate();
    return (
    <Card className="flex flex-col justify-center items-center p-4 m-2" elevation={3} sx={{ width: 200  }} onClick={()=>{navigate(`/teamdetalle/${id}`)}}>
            <Typography variant="subtitle1" gutterBottom component="div">
            {name}   
            </Typography>
            <Avatar
                alt="Imagen del equipo"
                src={imagen}
                sx={{ width: 100, height: 100 }}
            />
    </Card>
    )
}

export default CardTeam

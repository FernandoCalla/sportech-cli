import { Avatar, Card, Typography } from "@mui/material"

const CardMatch=({match})=>{
    return (
    <Card className="flex flex-col justify-center items-center p-4 m-2" elevation={3} sx={{ width: 400  }}>
        <div className="flex flex-row">
        <div>
            <Avatar
                alt="Imagen del equipo A"
                src={match.teamA.photo}
                sx={{ width: 100, height: 100 }}
            />
            <Typography variant="subtitle1" gutterBottom component="div">
             {match.teamA.denomination} 
            </Typography>
        </div>         
        <div className="mx-4">
            <Typography variant="subtitle1" gutterBottom component="div">
            VS  
            </Typography>
        </div>
        <div >
            <Avatar
                alt="Imagen del equipo B"
                src={match.teamB.photo}
                sx={{ width: 100, height: 100 }}
            />
            <Typography variant="subtitle1" gutterBottom component="div">
             {match.teamB.denomination} 
            </Typography>
        </div>
        </div>
        <center>
            <p><b>Lugar</b>: {match.location}</p>
            <p><b>Fecha</b>: {match.dateTime.substr(0,10)} </p>            
            <p><b>Hora</b>: {match.dateTime.substr(11,8)} </p>
        </center>
    </Card>
    )
}

export default CardMatch

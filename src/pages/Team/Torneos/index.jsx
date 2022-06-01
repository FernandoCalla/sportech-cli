import { useTheme } from "@emotion/react"
import { Avatar, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import CardMatch from "../../../components/CardMatch"
import CardsTournaments from "../../../components/CardTorneos"
import LabelComponent from "../../../components/Label"
import { useGetMatchsByTeam } from "../../../hooks/match"
import { useGetAllTeams } from "../../../hooks/team"
import { useGetAllTournaments } from "../../../hooks/tournament"

const Torneos=()=>{
    const theme = useTheme();
    const Torneos=useGetAllTournaments()
    const tournaments=Torneos?.data?.data?.tournaments ?? []
    return <>
        <Card style={{backgroundColor:theme.palette.primary.main}} className="flex p-4 my-2" elevation={4}>
            <Typography style={{color:"white"}} variant="h4" gutterBottom component="div">
            Torneos
            </Typography>
        </Card> 
        <div className="flex flex-wrap">          
            {tournaments.map((torneo,index)=>(
                <CardsTournaments key={index} name={torneo.denomination} description={torneo.description} imagen={torneo.photo} id={torneo._id} sport={torneo.sport.denomination} ruta="/team/torneos/"/>
            ))}  
        </div>   
    </>
}

export default Torneos
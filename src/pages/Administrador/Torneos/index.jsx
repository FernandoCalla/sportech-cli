import CardsTournaments from "../../../components/CardTorneos"
import Tournaments from '../../../data/torneos.json'
import { Button, Card, Typography } from "@mui/material"
import { AddCircleOutline } from "@mui/icons-material"
import FormularioTournament from "./Components/FormularioTournament"
import { useGetAllTournaments } from "../../../hooks/tournament"

const Torneos=()=>{
    const {data}=useGetAllTournaments()
    const tournaments=data?.data?.tournaments ?? []
    return <>
        <Card className="flex justify-between p-4 my-2" elevation={3}>
            <Typography variant="h4" gutterBottom component="div">
            Torneos
            </Typography>
            <FormularioTournament editar={true}/>
        </Card> 
        <div className="flex flex-wrap">          
            {tournaments.map((torneo,index)=>(
                <CardsTournaments key={index} name={torneo.denomination} description={torneo.description} imagen={torneo.photo} id={torneo._id} sport={torneo.sport.denomination} ruta="/admin/torneos/"/>
            ))}  
        </div> 
    </>
}

export default Torneos
import CardsTournaments from "./TorneosCards"
import Tournaments from '../../../data/torneos.json'
import { Button } from "@mui/material"
import { AddCircleOutline } from "@mui/icons-material"

const Torneos=()=>{
    const {tournaments}=Tournaments
    return <>
        <h1 className="mb-6 text-2xl md:text-4xl">
        Torneos
        </h1>
        <div  className="m-4">
                <Button variant="contained" size="large" startIcon={<AddCircleOutline/>}>
                    Crear torneos
                </Button>
        </div>
        <div className="flex flex-wrap">          
            {tournaments.map((torneo,index)=>(
                <CardsTournaments key={index} name={torneo.name} description={torneo.description} imagen={torneo.imagen} id={torneo.id} sport={torneo.sport}/>
            ))}  
        </div> 
    </>
}

export default Torneos
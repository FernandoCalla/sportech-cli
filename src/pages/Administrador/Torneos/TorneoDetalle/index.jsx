import { useGetByIdTournament } from '../../../../hooks/tournament'
import { useParams } from 'react-router-dom';
import { Card, Skeleton } from '@mui/material';
import LabelSports from '../../../../components/labelSports';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormularioAddTeam from './Components/FormularioAddTeam';
import FormularioMatch from './Components/FormularioMatch';
import CardTeam from '../../../../components/CardTeam';
import { useGetMatchsByTournament } from '../../../../hooks/match';
import CardMatch from '../../../../components/CardMatch';

const TorneoDetalle=()=>{
    let { torneoId } = useParams();
    const Matchs=useGetMatchsByTournament(torneoId)
    const Torneo=useGetByIdTournament(torneoId)
    const matchs=Matchs?.data?.data?.matchs ?? []
    console.log("match",Matchs)
    const torneo=Torneo?.data?.data?.tournament ?? ""
    if(Torneo.isError){
        return(
            <h1>Error al cargar la pagina</h1>
        )
    }
    if(Torneo.isLoading){
        return( <>  <div className='flex flex-row my-2'>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <div className='flex-auto mx-2'>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>   
                    </div>                      
                    
                    <div className='grid grid-cols-3 gap-1 my-2'>                    
                        <Skeleton variant="rectangular" width={310} height={118} />
                        <Skeleton variant="rectangular" width={310} height={118} />
                        <Skeleton variant="rectangular" width={310} height={118} />
                    </div>
                    <Skeleton variant="rectangular" height={200} />
                </> 
        )
    }
    return <>
        <Card className="flex justify-center p-4 my-2" elevation={3}>
            <Typography variant="h4" gutterBottom component="div">
            {torneo.denomination}   
            </Typography>
        </Card>       
        <div className='flex my-2'>
            <div className='mr-2'>
                <img src={torneo.photo} alt="imagen del torneo" width="350"/>
            </div>
            <Card className="p-4 flex-auto" elevation={3}>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Descripcion: </b>{torneo.description}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Fecha de inicio de registro: </b>{torneo.registrationStartDate.substr(0,10)}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Fecha de fin de registro: </b>{torneo.registrationEndDate.substr(0,10)}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Fecha de inicio del torneo: </b>{torneo.tournamentStartDate.substr(0,10)}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Fecha de fin de registro: </b>{torneo.tournamentEndDate.substr(0,10)}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Cantidad de equipos inscritos: </b>{torneo.teams.length}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Deporte: </b><LabelSports name={torneo.sport.denomination}/></Typography>
            </Card>            
        </div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" gutterBottom component="div">Equipos</Typography>          
        </AccordionSummary>
        <AccordionDetails>
          <FormularioAddTeam idTournament={torneo._id} sport={torneo.sport.denomination}/>
          <div className='flex flex-wrap'>
            {torneo.teams.map((team,index)=><CardTeam key={index} name={team.denomination} imagen={team.photo}/>)}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" gutterBottom component="div">Partidos</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormularioMatch idTournament={torneo._id} teams={torneo.teams}/>    
            <div className='flex flex-wrap'>
            {matchs.map((match,index)=><CardMatch key={index} match={match}/>)}
          </div>      
        </AccordionDetails>
      </Accordion>
      
        
        
    </>
}

export default TorneoDetalle
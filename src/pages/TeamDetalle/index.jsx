import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGetTeam } from "../../hooks/team";
import { useParams } from "react-router-dom";

const TeamDetalle=()=>{
    let { teamId } = useParams();
    const UsuarioData=useGetTeam(teamId)
    const Usuario= ((UsuarioData?.data?.data?.team) ?? {trainers:[],players:[]})

    if (UsuarioData.isLoading) {
        return <span>Loading...</span>
      }
    
    if (UsuarioData.isError) {
        return <span>Error:C</span>
    }



    return <>
        <Card className="flex justify-center p-4 my-2" elevation={3}>
            <Typography variant="h4" gutterBottom component="div">
            {Usuario.denomination}  
            </Typography>
        </Card>   
        <div className='flex m-4'>
            <div className='mr-2'>
                <img src={Usuario.photo} alt="imagen de perfil" width="350"/>
            </div>
            <Card className="p-4 flex-auto" elevation={5}>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Descripcion:</b>{Usuario.description}</Typography>
            </Card>            
        </div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" gutterBottom component="div">Entrenadores</Typography>          
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                    <TableRow>
                        <TableCell>Foto</TableCell>
                        <TableCell>Nombres</TableCell>  
                        <TableCell>DNI</TableCell>   
                        <TableCell>Edad</TableCell> 
                        <TableCell>Estatura</TableCell> 
                        <TableCell>Genero</TableCell>    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Usuario && Usuario.trainers.map((entrenador,index)=>
                        <TableRow key={index}>
                            <TableCell ><Avatar alt="logo equipo" src={entrenador.photo}/></TableCell>
                            <TableCell >{`${entrenador.firstName} ${entrenador.lastName} ${entrenador.surName} `}</TableCell>
                            <TableCell >{entrenador.dni}</TableCell>
                            <TableCell >{entrenador.age}</TableCell>
                            <TableCell >{entrenador.height}</TableCell>                            
                            <TableCell >{entrenador.gender}</TableCell>
                        </TableRow>
                    )}
          
                </TableBody>
            </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" gutterBottom component="div">Jugadores</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Foto</TableCell>
                        <TableCell>Nombres</TableCell>  
                        <TableCell>DNI</TableCell>   
                        <TableCell>Edad</TableCell> 
                        <TableCell>Estatura</TableCell> 
                        <TableCell>Genero</TableCell>     
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Usuario && Usuario.players.map((jugador,index)=>
                        <TableRow key={index}>
                            <TableCell ><Avatar alt="logo equipo" src={jugador.photo}/></TableCell>
                            <TableCell >{`${jugador.firstName} ${jugador.lastName} ${jugador.surName} `}</TableCell>
                            <TableCell >{jugador.dni}</TableCell>
                            <TableCell >{jugador.age}</TableCell>
                            <TableCell >{jugador.height}</TableCell>                            
                            <TableCell >{jugador.gender}</TableCell>
                        </TableRow>
                    )}          
                </TableBody>
            </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
    </>
}

export default TeamDetalle
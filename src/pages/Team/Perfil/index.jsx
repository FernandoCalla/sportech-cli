import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import LabelComponent from "../../../components/Label"
import LabelSports from "../../../components/labelSports"
import {  useGetByIdTeam } from "../../../hooks/team"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormularioAddPlayer from "./FormularioAddPlayer";
import FormularioAddTrainer from "./FormularioAddTrainer";

const Perfil=()=>{
    const UsuarioData=useGetByIdTeam()
    // console.log("usaurios",UsuarioData)
    

    if (UsuarioData.isLoading) {
        return <span>Loading...</span>
      }
    
    if (UsuarioData.isError) {
        return <span>Error:C</span>
    }
    if(UsuarioData.isSuccess){
        const Usuario= (UsuarioData?.data?.data?.team) ?? [{trainers:[],players:[],sport:{denomination:''}}]
        return <>
        <div className='flex my-2'>
            <div className='mr-2'>
                <img src={Usuario[0].photo} alt="imagen de perfil" width="350"/>
            </div>
            <Card className="p-4 flex-auto" elevation={3}>
                <Typography variant="h4" gutterBottom component="div">
                {Usuario[0].denomination}
                </Typography>
                {/* <Typography variant="subtitle1" gutterBottom component="div"><b>denominacion:</b>{Usuario.denomination}</Typography> */}
                <Typography variant="subtitle1" gutterBottom component="div"><b>Descripcion:</b>{Usuario[0].description}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Deporte: </b>{Usuario[0].sport.denomination !== "" && <LabelSports name={Usuario[0].sport.denomination}/>}</Typography>
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
          <FormularioAddTrainer id={Usuario[0]._id}/>
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
                    {Usuario[0].trainers.map((entrenador,index)=>
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
            <FormularioAddPlayer id={Usuario[0]._id}/>    
            {/* <div className='flex flex-wrap'>
            {Usuario.players.map((match,index)=><p>Jugador</p>)}
            </div>       */}
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
                    {Usuario[0].players.map((jugador,index)=>
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

}

export default Perfil
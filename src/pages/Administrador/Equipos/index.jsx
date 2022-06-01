import { Avatar, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import LabelComponent from "../../../components/Label"
import { useGetAllTeams } from "../../../hooks/team"

const Equipos=()=>{
    const Teams=useGetAllTeams()
    const teamsData= Teams?.data?.data?.teams ?? []
    return <>
        <Card className="flex p-4 my-2" elevation={3}>
            <Typography variant="h4" gutterBottom component="div">
            Equipos
            </Typography>
        </Card> 
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Foto</TableCell>
                        <TableCell>Nombre</TableCell>                        
                        <TableCell>Deporte</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamsData.map((team,index)=>
                        <TableRow key={index}>
                            <TableCell ><Avatar alt="logo equipo" src={team.photo}/></TableCell>
                            <TableCell >{team.denomination}</TableCell>
                            <TableCell ><LabelComponent name={team.sport.denomination}/></TableCell>
                        </TableRow>
                    )}
          
                </TableBody>
            </Table>
    </TableContainer>
    </>
}

export default Equipos
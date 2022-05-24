import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import LabelComponent from "../../../components/Label"
import { useGetAllTeams } from "../../../hooks/team"

const Equipos=()=>{
    const Teams=useGetAllTeams()
    console.log("data",Teams)
    const teamsData= Teams?.data?.data?.teams ?? []
    console.log("DaTAAA",teamsData)
    return <>
        <h1 className="mb-6 text-2xl md:text-4xl">
            Equipos
        </h1>
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
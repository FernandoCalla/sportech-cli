import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import LabelComponent from "../../../../components/Label"
import { useGetAllMembers } from "../../../../hooks/member"

const Jugadores=()=>{
    const Members=useGetAllMembers()
    const jugadoresData= Members?.data?.data?.members.filter(member=> member.typeMember === 0) ?? []
    return <>
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
                        <TableCell>Deporte</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jugadoresData.map((jugador,index)=>
                        <TableRow key={index}>
                            <TableCell ><Avatar alt="logo equipo" src={jugador.photo}/></TableCell>
                            <TableCell >{`${jugador.firstName} ${jugador.lastName} ${jugador.surName} `}</TableCell>
                            <TableCell >{jugador.dni}</TableCell>
                            <TableCell >{jugador.age}</TableCell>
                            <TableCell >{jugador.height}</TableCell>                            
                            <TableCell >{jugador.gender}</TableCell>
                            <TableCell ><LabelComponent name={jugador.sport.denomination}/></TableCell>
                        </TableRow>
                    )}
          
                </TableBody>
            </Table>
    </TableContainer>
    </>
}

export default Jugadores
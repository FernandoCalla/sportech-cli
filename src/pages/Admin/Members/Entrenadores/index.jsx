import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import LabelComponent from "../../../../components/Label"
import { useGetAllMembers } from "../../../../hooks/member"

const Entrenadores=()=>{
    const Members=useGetAllMembers()
    const entrenadoresData= Members?.data?.data?.members.filter(member=> member.typeMember ===1) ?? []
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
                    {entrenadoresData.map((entrenador,index)=>
                        <TableRow key={index}>
                            <TableCell ><Avatar alt="logo equipo" src={entrenador.photo}/></TableCell>
                            <TableCell >{`${entrenador.firstName} ${entrenador.lastName} ${entrenador.surName} `}</TableCell>
                            <TableCell >{entrenador.dni}</TableCell>
                            <TableCell >{entrenador.age}</TableCell>
                            <TableCell >{entrenador.height}</TableCell>                            
                            <TableCell >{entrenador.gender}</TableCell>
                            <TableCell ><LabelComponent name={entrenador.sport.denomination}/></TableCell>
                        </TableRow>
                    )}
          
                </TableBody>
            </Table>
    </TableContainer>
    </>
}

export default Entrenadores
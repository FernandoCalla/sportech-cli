import { useTheme } from "@emotion/react"
import { Avatar, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import CardMatch from "../../../components/CardMatch"
import LabelComponent from "../../../components/Label"
import { useGetMatchsByTeam } from "../../../hooks/match"
import { useGetAllTeams, useGetByIdTeam } from "../../../hooks/team"

const Partidos=()=>{
    const theme = useTheme();
    const UsuarioData=useGetByIdTeam()
    const Usuario= ((UsuarioData?.data?.data?.team) ?? [""])[0]
    const Partidos=useGetMatchsByTeam(Usuario._id)
    const matchsLocal=Partidos?.data?.data?.matchs?.local ?? []
    const matchsVisitante=Partidos?.data?.data?.matchs?.visitante ?? []
    return <>
        <Card style={{backgroundColor:theme.palette.primary.main}} className="flex p-4 my-2" elevation={4}>
            <Typography style={{color:"white"}} variant="h4" gutterBottom component="div">
            Mis partidos
            </Typography>
        </Card> 
        <Card className="flex p-4 my-2 justify-center" elevation={1}>
        <Typography variant="h6" gutterBottom component="div">
            Partidos de local
        </Typography>
        </Card>
        <div className='flex flex-wrap'>
            {matchsLocal.map((match,index)=><CardMatch key={index} match={match}/>)}
        </div>  
        <Card className="flex p-4 my-2 justify-center" elevation={1}>
            <Typography variant="h6" gutterBottom component="div">
                Partidos de visitante
            </Typography> 
        </Card>
        <div className='flex flex-wrap'>
            {matchsVisitante.map((match,index)=><CardMatch key={index} match={match}/>)}
        </div>   
    </>
}

export default Partidos
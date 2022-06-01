import Header from "./Components/header"
import Typography from '@mui/material/Typography';
import TournamentCard from "./Components/cardTournament";
import TeamsCard from './Components/cardTeams'
import Tournaments from '../../data/torneos.json'
import Teams from '../../data/equipos.json'
import Link from "react-scroll/modules/components/Link";
import Footer from "./Components/Footer";
import { useGetAllTournaments } from "../../hooks/tournament";
import CardsTournaments from "../../components/CardTorneos";
import { useGetAllTeams } from "../../hooks/team";
import CardTeam from "../../components/CardTeam";
import { useNavigate } from "react-router-dom";
const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: 'active'
  }

const LandingPage=()=>{    
    const Torneos=useGetAllTournaments()
    const tournaments=Torneos?.data?.data?.tournaments ?? []
    const Teams=useGetAllTeams()
    const teams=Teams?.data?.data?.teams ?? []
    return(<>
        <Header/>
        <section className="flex w-full flex-col-reverse items-center md:my-14 md:flex-row px-4">
            <div className="w-full flex flex-col items-center">
                <h1 className="mb-6 text-3xl text-black md:text-5xl">
                La mejor plataforma deportiva
                </h1>
                <p className="mb-5 flex max-w-lg gap-2 pr-8 text-sm leading-tight md:text-base">
                Plataforma dedicada al manejo de torneos deportivos , con un area para adquisicion de talento y registro de clubes.
                </p>
                <Link
                    to="cursos"
                    {...scrollProps}
                    className="bg-orange-500 cursor-pointer rounded-xl px-8 py-2 text-white"
                    >
                    Ver más
                </Link>
            </div>
        
            <img src="src/assets/logo.png" alt="logo" width="400" height="500"/>
            </section>
          <img className="" src="src/assets/deporte.jpg" alt="logo" width="100%" height="500"/>
          <center>
              <h1 id="torneos" className="my-6 text-1xl text-black md:text-3xl">TORNEOS</h1>
              <section className="flex flex-wrap justify-center">  
                    {tournaments.map((torneo,index)=>(
                        <CardsTournaments key={index} name={torneo.denomination} description={torneo.description} imagen={torneo.photo} id={torneo._id} sport={torneo.sport.denomination} ruta="/torneosdetalle/"/>
                    ))}  
             </section>     
              <h1 id="equipos" className="my-6 text-1xl text-black md:text-3xl">EQUIPOS</h1>
              <section className="flex flex-wrap justify-center">
                {teams.map((team,index)=><CardTeam key={index} name={team.denomination} imagen={team.photo} id={team._id}/>)}       
              </section>
          </center>
          <Footer/>
    </>)
}

export default LandingPage
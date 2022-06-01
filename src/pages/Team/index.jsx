import { Routes, Route} from 'react-router-dom'
import Inicio from './inicio'
import Dashboard from '../../components/layout/dashboard'
import { teamNavConfig } from './layoutMember'
import Torneos from './Torneos'
import Perfil from './Perfil'
import Partidos from './Partidos'
import TorneoDetalle from '../TorneoDetalle'

const TeamDashboard=()=>{
    return(
        <Routes>
        <Route
          path="/"
          element={<Dashboard navConfig={teamNavConfig}/>}
        >
          <Route index element={<Inicio />} />
          <Route path="partidos">
            <Route index element={<Partidos/>} />
          </Route>  
          <Route path="torneos">
            <Route index element={<Torneos/>} />
            <Route path=":torneoId" element={<TorneoDetalle/>} />       
          </Route>       
          <Route path="perfil">
            <Route index element={<Perfil/>} />
          </Route>       
        </Route>
      </Routes>
    )
}

export default TeamDashboard
import { Routes, Route} from 'react-router-dom'
import Inicio from './inicio'
import Dashboard from '../../components/layout/dashboard'
import { teamNavConfig } from './layoutMember'

const TeamDashboard=()=>{
    return(
        <Routes>
        <Route
          path="/"
          element={<Dashboard navConfig={teamNavConfig}/>}
        >
          <Route index element={<Inicio />} />          
        </Route>
      </Routes>
    )
}

export default TeamDashboard
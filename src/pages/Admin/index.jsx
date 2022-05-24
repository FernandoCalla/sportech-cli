import { Routes, Route} from 'react-router-dom'
import Inicio from './inicio'
import Dashboard from '../../components/layout/dashboard'
import { adminNavConfig } from './layoutAdmin'
import Torneos from './Torneos'
import Equipos from './Equipos'
import TorneoDetalle from './Torneos/TorneoDetalle'
import MemberTabs from './Members'

const AdminDashboard=()=>{
    return(
        <Routes>
        <Route
          path="/"
          element={<Dashboard navConfig={adminNavConfig}/>}
        >
          <Route index element={<Inicio />} />  
          <Route path="torneos">
            <Route index element={<Torneos/>}/>
            <Route path=":torneoId" element={<TorneoDetalle/>} />              
            
          </Route>    
          <Route path="equipos">
            <Route index element={<Equipos/>} />
          </Route>    
          <Route path="jugadores">
            <Route index element={<MemberTabs/>} />
          </Route>           
        </Route>
      </Routes>
    )
}

export default AdminDashboard
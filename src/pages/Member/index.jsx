import { Routes, Route} from 'react-router-dom'
import Inicio from './inicio'
import Dashboard from '../../components/layout/dashboard'
import { memberNavConfig } from './layoutMember'
import Perfil from './Perfil/index'

const MemberDashboard=()=>{
    return(
        <Routes>
        <Route
          path="/"
          element={<Dashboard navConfig={memberNavConfig}/>}
        >
          <Route index element={<Inicio />} />
          <Route path="perfil">
            <Route index element={<Perfil/>} />
          </Route>           
        </Route>
      </Routes>
    )
}

export default MemberDashboard
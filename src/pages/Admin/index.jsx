import { Routes, Route} from 'react-router-dom'
import Inicio from './inicio'
import Dashboard from '../../components/layout/dashboard'
import { adminNavConfig } from './layoutAdmin'

const AdminDashboard=()=>{
    return(
        <Routes>
        <Route
          path="/"
          element={<Dashboard navConfig={adminNavConfig}/>}
        >
          <Route index element={<Inicio />} />          
        </Route>
      </Routes>
    )
}

export default AdminDashboard
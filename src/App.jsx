import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import LandingPage from './pages/Landing';
import Login from './pages/Login/index'
import TeamDashboard from './pages/Team';
import MemberDashboard from './pages/Member';
import AdminDashboard from './pages/Administrador';
import Register from './pages/Register';
import TorneoDetalle from './pages/TorneoDetalle';
import TeamDetalle from './pages/TeamDetalle';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>      
      <Route path="/teamdetalle/:teamId" element={<TeamDetalle/>}/>
      <Route path="/torneosdetalle/:torneoId" element={<TorneoDetalle/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin/*" element={<AdminDashboard />} />      
      <Route path="/member/*" element={<MemberDashboard />} />
      <Route path="/team/*" element={<TeamDashboard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

import axios from "axios"

const API = import.meta.env.VITE_SERVER_URL || "http://localhost:4000"

export const createTournament = (dataRegister) => {
    return axios.post(`${API}/api/tournament`,dataRegister)
}
export const addTeamToTournament = (id,dataRegister) => {
    return axios.put(`${API}/api/tournament/team/${id}`,dataRegister)
}

export const GetAllTournaments=()=>{
   return axios.get(`${API}/api/tournament`)
}

export const GetByIdTournament=(id)=>{
    return axios.get(`${API}/api/tournament/${id}`)
}




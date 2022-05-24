import axios from "axios"

const API = "http://localhost:4000"

export const createTournament = (dataRegister) => {
    return axios.post(`${API}/api/tournament`,dataRegister)
}

export const GetAllTournaments=()=>{
   return axios.get(`${API}/api/tournament`)
}




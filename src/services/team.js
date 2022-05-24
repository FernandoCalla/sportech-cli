import axios from "axios"

const API = "http://localhost:4000"

export const createTeam = (dataRegister) => {
    return axios.post(`${API}/api/team`,dataRegister)
}

export const GetAllTeams=()=>{
   return axios.get(`${API}/api/team`)
}




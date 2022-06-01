import axios from "axios"

const API = "http://localhost:4000"

export const CreateMatch = (dataRegister) => {
    return axios.post(`${API}/api/match`,dataRegister)
}
export const EditMatch = (id,dataRegister) => {
    return axios.put(`${API}/api/match/${id}`,dataRegister)
}

export const GetAllMatchs=()=>{
   return axios.get(`${API}/api/match`)
}

export const GetByIdMatch=(id)=>{
    return axios.get(`${API}/api/match/${id}`)
}

export const GetMatchsByTournament=(id)=>{
    return axios.get(`${API}/api/match/tournament/${id}`)
}

export const GetMatchsByTeam=(id)=>{
    return axios.get(`${API}/api/match/team/${id}`)
}




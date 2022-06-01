import axios from "axios"

const API = import.meta.env.VITE_SERVER_URL || "http://localhost:4000"

export const createTeam = (dataRegister) => {
    return axios.post(`${API}/api/team`,dataRegister)
}

export const addPlayer = (id,dataRegister) => {
    return axios.post(`${API}/api/team/player/${id}`,dataRegister)
}

export const addTrainer = (id,dataRegister) => {
    return axios.post(`${API}/api/team/trainer/${id}`,dataRegister)
}

export const GetAllTeams=()=>{
   return axios.get(`${API}/api/team`)
}

export const GetTeamById=(id)=>{
    console.log("SIII")
    return axios.get(`${API}/api/team/${id}`)
 }

export const GetTeamByIdUser=(id)=>{
    return axios.get(`${API}/api/team/user/${id}`)
 }




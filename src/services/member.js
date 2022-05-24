import axios from "axios"

const API = "http://localhost:4000"

export const GetAllMembers=()=>{
    return axios.get(`${API}/api/member`)
}

export const createMember = (dataRegister) => {
    return axios.post(`${API}/api/member`,dataRegister)
}




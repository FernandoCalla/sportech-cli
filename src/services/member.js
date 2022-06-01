import axios from "axios"

const API = import.meta.env.VITE_SERVER_URL || "http://localhost:4000"

export const GetAllMembers=()=>{
    return axios.get(`${API}/api/member`)
}

export const GetMemberByIdUser=(id)=>{
    return axios.get(`${API}/api/member/user/${id}`)
}

export const createMember = (dataRegister) => {
    return axios.post(`${API}/api/member`,dataRegister)
}

export const createComment = (id,dataRegister) => {
    return axios.post(`${API}/api/member/comment/${id}`,dataRegister)
}




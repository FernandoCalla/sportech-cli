import axios from "axios"

const API = "http://localhost:4000"

export const createAdmin = (dataRegister) => {
    return axios.post(`${API}/api/admin`,dataRegister)
}

export const getAdminByIdUser = (id) => {
    return axios.get(`${API}/api/admin/user/${id}`)
}
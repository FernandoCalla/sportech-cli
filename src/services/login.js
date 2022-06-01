import axios from "axios"

const API = "http://localhost:4000"

export const LoginService = async(dataLogin) => {
    try {
        const response =await axios.post(`${API}/auth/login`,dataLogin)
        console.log("estado",response)
        if (response.status !== 200)
          return { success: false, formErrors: response.data }    
        return { success: true, usuario:{...response.data}}
      } catch (error) {
        return error
      }
}


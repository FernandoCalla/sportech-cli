import axios from "axios"

const API = import.meta.env.VITE_SERVER_URL || "http://localhost:4000"

export const createUser = async(dataRegister) => {
      try {
        const response =await axios.post(`${API}/api/user`,dataRegister)
        if (response.status !== 201 && response.status !== 200)
          return { success: false, formErrors: response.data }    
        return { success: true, usuario:{...response.data}}
      } catch (error) {
        return error
      }
}


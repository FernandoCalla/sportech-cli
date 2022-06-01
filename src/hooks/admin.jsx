import { useMutation,useQuery,useQueryClient } from "react-query"
import { createAdmin, getAdminByIdUser } from "../services/admin"

const key="admin"
export const useGetByIdAdmin=(id)=>{  
    let usuario=localStorage.getItem("Usuario")
    let userComplete =JSON.parse(usuario) || {id:"",full_path:"",token:""}  
    return useQuery(key,()=>getAdminByIdUser(userComplete.id))
}

// export const useGetByIdCategoria=(id)=>{
//     return useQuery(key,GetById(id))
// }

export const useCreateAdmin=()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createAdmin, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}



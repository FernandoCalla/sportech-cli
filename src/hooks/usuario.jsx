import { useMutation,useQuery,useQueryClient } from "react-query"
import { createUser } from "../services/usuario"

const key="usuario"
// export const useGetAllCategoria=()=>{
//     return useQuery(key,createUser)
// }

// export const useGetByIdCategoria=(id)=>{
//     return useQuery(key,GetById(id))
// }

export const useCreateUsuario=(body)=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createUser(body), {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}
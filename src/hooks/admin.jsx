import { useMutation,useQuery,useQueryClient } from "react-query"
import { createAdmin } from "../services/admin"

const key="admin"
// export const useGetAllCategoria=()=>{
//     return useQuery(key,createUser)
// }

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



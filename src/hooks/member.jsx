import { useMutation,useQuery,useQueryClient } from "react-query"
import { createMember } from "../services/member"

const key="member"
// export const useGetAllCategoria=()=>{
//     return useQuery(key,createUser)
// }

// export const useGetByIdCategoria=(id)=>{
//     return useQuery(key,GetById(id))
// }

export const useCreateMember=(body)=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createMember, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}



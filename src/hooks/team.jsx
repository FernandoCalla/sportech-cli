import { useMutation,useQuery,useQueryClient } from "react-query"
import { createTeam} from "../services/team"

const key="team"
// export const useGetAllCategoria=()=>{
//     return useQuery(key,createUser)
// }

// export const useGetByIdCategoria=(id)=>{
//     return useQuery(key,GetById(id))
// }

export const useCreateTeam=(body)=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createTeam, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}



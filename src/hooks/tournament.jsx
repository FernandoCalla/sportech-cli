import { useMutation,useQuery,useQueryClient } from "react-query"
import { createTeam, GetAllTeams} from "../services/team"

const key="tournament"

export const useGetAllTeams=()=>{
  return useQuery(key,GetAllTeams)
}

export const useCreateTeam=(body)=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createTeam, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}




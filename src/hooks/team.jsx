import { useMutation,useQuery,useQueryClient } from "react-query"
import { addPlayer, addTrainer, createTeam, GetAllTeams, GetTeamById, GetTeamByIdUser} from "../services/team"

const key="team"

export const useGetAllTeams=()=>{
  return useQuery(key,GetAllTeams)
}

export const useGetByIdTeam=()=>{  
  let usuario=localStorage.getItem("Usuario")
  let userComplete =JSON.parse(usuario) || {id:"",full_path:"",token:""}  
  return useQuery(key,()=>GetTeamByIdUser(userComplete.id))
}
export const useGetTeam=(id)=>{  
  return useQuery(key,()=>GetTeamById(id))
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

export const useAddPlayerTeam=(id)=>{
  const queryClient = useQueryClient()
  const mutation = useMutation((body)=>addPlayer(id,body), {
      onSuccess: () => {
        queryClient.invalidateQueries(key)
      },
    })
  return mutation
}
export const useAddTrainerTeam=(id)=>{
  const queryClient = useQueryClient()
  const mutation = useMutation((body)=>addTrainer(id,body), {
      onSuccess: () => {
        queryClient.invalidateQueries(key)
      },
    })
  return mutation
}



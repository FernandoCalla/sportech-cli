import { useMutation,useQuery,useQueryClient } from "react-query"
import { CreateMatch, EditMatch, GetAllMatchs, GetByIdMatch, GetMatchsByTeam, GetMatchsByTournament } from "../services/match"

const key="match"

export const useGetAllMatchs=()=>{
  return useQuery(key,GetAllMatchs)
}

export const useGetByIdMatch=(idTournament)=>{
  return useQuery([key,idTournament],()=>GetByIdMatch(idTournament))
}

export const useCreateMatch=()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(CreateMatch, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}
export const useEditMatch=(id)=>{
  const queryClient = useQueryClient()
  const mutation = useMutation((data)=>EditMatch(id,data), {
      onSuccess: () => {
        queryClient.invalidateQueries(key)
      },
    })
  return mutation
}

export const useGetMatchsByTournament=(idTournament)=>{
  return useQuery([key,idTournament],()=>GetMatchsByTournament(idTournament))
}

export const useGetMatchsByTeam=(idTournament)=>{
  return useQuery([key,idTournament],()=>GetMatchsByTeam(idTournament))
}
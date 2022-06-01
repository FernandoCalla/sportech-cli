import { useMutation,useQuery,useQueryClient } from "react-query"
import { addTeamToTournament, createTournament, GetAllTournaments, GetByIdTournament } from "../services/tournament"

const key="tournament"

export const useGetAllTournaments=()=>{
  return useQuery(key,GetAllTournaments)
}

export const useGetByIdTournament=(idTournament)=>{
  return useQuery([key,idTournament],()=>GetByIdTournament(idTournament))
}

export const useCreateTournament=()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createTournament, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}

export const useAddTeamToTournament=(id)=>{
  const queryClient = useQueryClient()
  const mutation = useMutation((dataForm)=>addTeamToTournament(id,dataForm), {
      onSuccess: () => {
        queryClient.invalidateQueries(key)
      },
    })
  return mutation
}




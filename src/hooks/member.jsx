import { useMutation,useQuery,useQueryClient } from "react-query"
import { createMember, GetAllMembers } from "../services/member"

const key="member"

export const useGetAllMembers=()=>{
  return useQuery(key,GetAllMembers)
}

export const useCreateMember=(body)=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(createMember, {
        onSuccess: () => {
          queryClient.invalidateQueries(key)
        },
      })
    return mutation
}





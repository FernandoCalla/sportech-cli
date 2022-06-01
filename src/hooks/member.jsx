import { useMutation,useQuery,useQueryClient } from "react-query"
import { createComment, createMember, GetAllMembers, GetMemberByIdUser } from "../services/member"

const key="member"

export const useGetAllMembers=()=>{
  return useQuery(key,GetAllMembers)
}

export const useGetByIdMember=()=>{
  let usuario=localStorage.getItem("Usuario")
  let userComplete =JSON.parse(usuario) ?? {id:"",full_path:"",token:""}  
  return useQuery(key,()=>GetMemberByIdUser(userComplete.id))
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

export const useCreateComment=(id)=>{
  const queryClient = useQueryClient()
  const mutation = useMutation((body)=>createComment(id,body), {
      onSuccess: () => {
        queryClient.invalidateQueries(key)
      },
    })
  return mutation
}





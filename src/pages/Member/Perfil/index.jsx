import { Button, Card, DialogActions, DialogContent, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import LabelSports from "../../../components/labelSports";
import { useCreateComment, useGetByIdMember } from "../../../hooks/member";

const Perfil=()=>{
    const UsuarioData=useGetByIdMember()
    const Usuario= ((UsuarioData?.data?.data?.member) ?? [""])[0]
    const AddComment=useCreateComment(Usuario._id)
    const {
        control,
        handleSubmit,
        register,reset
      } = useForm({
        defaultValues: { comment: ""}
      });

    const onSubmit=(formData)=>{
        // const newMatch={...formData,tournament:idTournament}
        AddComment.mutate(formData,{
          onError: () => { 
            reset()                 
          },
          onSuccess: () => {
            reset()
          },
        })
    }

    if (UsuarioData.isLoading) {
        return <span>Loading...</span>
      }
    
    if (UsuarioData.isError) {
        return <span>Error:C</span>
    }
    else{return <>
        <div className='flex my-2'>
            <div className='mr-2'>
                <img src={Usuario.photo} alt="imagen de perfil" width="350"/>
            </div>
            <Card className="p-4 flex-auto" elevation={3}>
                <Typography variant="h4" gutterBottom component="div">
                {Usuario.firstName} {Usuario.lastName} {Usuario.surName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Edad:</b>{Usuario.age}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Estatura:</b>{Usuario.height}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Genero:</b>{Usuario.gender}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>DNI:</b>{Usuario.dni}</Typography>
                <Typography variant="subtitle1" gutterBottom component="div"><b>Deporte: </b><LabelSports name={Usuario.sport.denomination}/></Typography>
            </Card>            
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <DialogContent dividers>
              <div className='m-2 flex flex-row'>
                <Controller         
                  name="comment"
                  control={control}
                  render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Escribe tu comentario"       
                                    />
                                    )}
                                />

            <Button variant='contained' type="submit">
                            Guardar
            </Button>                                 
              </div>          
              </DialogContent>
        </form>
        {Usuario.comments.map((comment, index) => (
          <div
            key={index}
            className="mb-4 flex flex-col items-start justify-center gap-4 rounded-lg bg-gray-50 p-3 shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={Usuario.photo}
                alt="avatar"
                className="h-10 w-10 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {Usuario.firstName}
              </h3>
            </div>
            <div>
                {comment}
            </div>
          </div>
        ))}
    </>}
}

export default Perfil
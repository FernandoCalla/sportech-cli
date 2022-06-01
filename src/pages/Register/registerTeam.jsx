import * as React from 'react';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { Alert, MenuItem, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../services/usuario';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useCreateTeam } from '../../hooks/team';

const Input = styled('input')({
    display: 'none',
  });
  

const RegisterTeam=({usuario})=>{
    const [alert,setAlert]=React.useState({state:false,error:false})
    const {user}=usuario
    const crearTeam = useCreateTeam()
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,register
      } = useForm({
        defaultValues: { denomination: "", sport: "" , description: "",foto:""},
      });
    const onSubmit=(formData)=>{
        const { foto:image } = formData
        const data = new FormData()
        image && data.append('photo', image[0], image[0].name)
        data.append('denomination', formData.denomination)
        data.append('description', formData.description)
        data.append('sport',formData.sport)        
        data.append('user', user._id)
        crearTeam.mutate(data,{
            onError: () => {      
                setAlert({state:true,error:true})
              },
            onSuccess: () => {
                setAlert({state:true,error:false})
              },
        })
    }
    return(
        <center>
            <img src="src/assets/SporTechLogo.png" alt="logo" width="200" height="300"/>
            <h2>Datos del equipo</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
                            <div className='mx-2 my-2 grid gap-4'>
                                <Controller
                                    name="denomination"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Denominacion"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                                <Controller
                                    name="sport"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        select
                                        label="Deporte"       
                                    >
                                       <MenuItem value={'6297124e14a44d4cad301530'}>
                                            Futbol
                                        </MenuItem>
                                        <MenuItem value={"6297124614a44d4cad30152e"}>
                                            Basquet
                                        </MenuItem>
                                    </TextField>
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Descripcion"
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" {...register("foto")}/>
                                    <Button variant="outlined" type="file" startIcon={<PhotoCamera />} component="span">
                                        Subir imagen de perfil
                                    </Button>
                                </label>
                            </div>
                            <div className='mx-2 my-2'>
                                <Button fullWidth type="submit" variant="contained" >Guardar</Button>
                            </div>
                        </form>
                        {alert.state === true && alert.error === false &&
                            <Alert severity="success">Usuario configurado.
                                <Link to="/login">
                                    Click aqui para ir al login!
                                </Link>
                            </Alert>
                        }
                    </center>
    )
}

export default RegisterTeam
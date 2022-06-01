import * as React from 'react';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { Alert, MenuItem, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {useCreateAdmin} from '../../hooks/admin'

const Input = styled('input')({
    display: 'none',
  });
  

const RegisterAdmin=({usuario})=>{
    const {user}=usuario
    const [alert,setAlert]=React.useState({state:false,error:false})    
    const crearAdmin = useCreateAdmin()
    const {
        control,
        handleSubmit,
        register
      } = useForm({
        defaultValues: { firstName: "", lastName: "" , surName: "",dni:"" ,foto:''},
      });
    const onSubmit=(formData)=>{
        const { foto:image } = formData
        const data = new FormData()
        image && data.append('photo', image[0], image[0].name)
        data.append('firstName', formData.firstName)
        data.append('lastName', formData.lastName)
        data.append('surName', formData.surName)
        data.append('dni', formData.dni)
        data.append('user', user._id)
        crearAdmin.mutate(data,{
            onError: (error) => {
                setAlert({state:true,error:true})
              },
            onSuccess: () => {
                setAlert({state:true,error:false})
              },
        })
    }
    return(
        <center>
            <img src="https://res.cloudinary.com/sportech/image/upload/v1654066087/sportech/SporTechLogo_w7oavu.png" alt="logo" width="200" height="300"/>
            <h2>Datos de Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Nombres"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Apellido paterno"
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="surName"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Apellido Materno"
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="dni"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="DNI"
                                        type="number"
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" {...register("foto")} />
                                    <Button variant="outlined" type="file" startIcon={<PhotoCamera />} component="span">
                                        Subir imagen de perfil
                                    </Button>
                                </label>
                            </div>
                            <div className='mx-2 my-2'>
                                <Button fullWidth type="submit" variant="contained" >Guardar</Button>
                            </div>
                        </form>
                        {alert.state === true && (alert.error === false ?
                            <Alert severity="success">Usuario configurado.
                                <Link to="/login">
                                    Click aqui para ir al login!
                                </Link>
                            </Alert>:
                            <Alert severity="error">Usuario no configurado.
                                <Link to="/">
                                    Click aqui para ir regresar a la pagina de inicio!
                                </Link>
                            </Alert>)
                        }
                    </center>
    )
}

export default RegisterAdmin
import * as React from 'react';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { Alert, MenuItem, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../services/usuario';

const RegisterUser=({setUserCreated,setUsuario})=>{
    const [alert,setAlert]=React.useState({state:false,error:false})
    const navigate = useNavigate();
    const {
        control,
        handleSubmit
      } = useForm({
        defaultValues: { email: "", password: "" , rol: 2},
      });
    const onSubmit=async (formData)=>{
        const response = await createUser(formData)
          if (response.success) {
            setUserCreated({state:true,rol:response.usuario.rol})
            setUsuario(response.usuario)
          }
          else{
            setAlert({state:true,error:true})
          }
    }
    return(
        <center>
            <img src="https://res.cloudinary.com/sportech/image/upload/v1654066087/sportech/SporTechLogo_w7oavu.png" alt="logo" width="200" height="300"/>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                            <div className='mx-6 my-2'>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Correo Electrónico"
                                        type="email"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-6 my-2'>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Contraseña"
                                        type="password"             
                                        
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-6 my-2'>
                                <Controller
                                    name="rol"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        select
                                        label="Tipo de usuario"       
                                    >
                                        <MenuItem value={0}>
                                            Admin
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            Equipo
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            Jugador/Entrenador
                                        </MenuItem>
                                    </TextField>
                                    )}
                                />
                            </div>
                            <div className=' my-2'>
                                <Button type="submit" variant="contained" >Registrarse</Button>
                            </div>
                        </form>
                        {alert.state === true && alert.error === true &&
                        <Alert severity="error">No se pudo registrar al usuario.
                            <Link to="/">
                                Click aqui para ir al inicio!
                            </Link>
                        </Alert>
                        }
                    </center>
    )
}

export default RegisterUser
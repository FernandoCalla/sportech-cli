import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { Alert, TextField } from '@mui/material';
import ButtonChangeTheme from '../../components/ButtonChangeTheme';
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from '../../services/login';

const Login =()=>{
    const [error,setError]=React.useState(false)
  const navigate = useNavigate();
    const {
        control,
        handleSubmit
      } = useForm({
        defaultValues: { email: "", password: ""},
      });
    const onSubmit=async (formData)=>{
        const response = await LoginService(formData)
          if (response.success) {
            localStorage.setItem("Usuario",JSON.stringify(response.usuario))
            if(response.usuario.rol === 0)navigate(`/admin/torneos`)
            if(response.usuario.rol === 1)navigate(`/team/perfil`)
            if(response.usuario.rol === 2)navigate(`/member/perfil`)
          }
          else {
            setError(true)
          }
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <Card elevation={3} sx={{ minWidth: 275 ,width:450 ,minHeight:400, height:500}}>
                <CardContent>
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
                            <div className=' my-2'>
                                <Button type="submit" variant="contained" >Ingresar</Button>
                            </div>
                        </form>
                        {error && <Alert severity="error">Error al iniciar sesion!</Alert>}
                        <Link to="/register" className="text-sm text-blue-600">
                            ¿No tienes cuenta? Regístrate
                        </Link>
                    </center>
                </CardContent>
            </Card>
            <ButtonChangeTheme/>
    </div>
    )
} 
export default Login
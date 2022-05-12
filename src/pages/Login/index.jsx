import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@mui/material';
import ButtonChangeTheme from '../../components/ButtonChangeTheme';
import { useNavigate } from "react-router-dom";
import { LoginService } from '../../services/login';

const Login =()=>{
  const navigate = useNavigate();
    const {
        control,
        handleSubmit
      } = useForm({
        defaultValues: { email: "", password: ""},
      });
    const onSubmit=async (formData)=>{
        const response = await LoginService(formData)
        console.log("H",response)
          if (response.success) {
            localStorage.setItem("Usuario",JSON.stringify(response.usuario))
            if(response.usuario.rol === 0)navigate(`/admin`)
            if(response.usuario.rol === 1)navigate(`/team`)
            if(response.usuario.rol === 2)navigate(`/member`)
          }
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <Card elevation={3} sx={{ minWidth: 275 ,width:450 ,minHeight:400, height:500}}>
                <CardContent>
                    <center>
                        <img src="src/assets/SporTechLogo.png" alt="logo" width="200" height="300"/>
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
                    </center>
                </CardContent>
            </Card>
            <ButtonChangeTheme/>
    </div>
    )
} 
export default Login
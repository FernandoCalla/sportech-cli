import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@mui/material';

const Login =()=>{
    const {
        control,
        handleSubmit
      } = useForm({
        defaultValues: { usuario: "", contraseña: ""},
      });
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <Card elevation={3} sx={{ minWidth: 275 ,width:450 ,minHeight:400, height:500}}>
                <CardContent>
                    <center>
                        <img src="src/assets/logo.png" alt="logo" width="200" height="300"/>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                            <div className='mx-6 my-2'>
                                <Controller
                                    name="usuario"
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
                                    name="contraseña"
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
                                <Button variant="contained" type="submit" >Ingresar</Button>
                            </div>
                        </form>
                    </center>
                </CardContent>
            </Card>
    </div>
    )
} 
export default Login
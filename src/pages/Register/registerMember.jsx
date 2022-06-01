import * as React from 'react';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { Alert, MenuItem, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useCreateMember } from '../../hooks/member';

const Input = styled('input')({
    display: 'none',
  });
  

const RegisterMember=({usuario})=>{
    const {user}=usuario
    const [alert,setAlert]=React.useState({state:false,error:false})
    const navigate = useNavigate();
    const crearMember = useCreateMember()
    const {
        control,
        handleSubmit,
        register
      } = useForm({
        defaultValues: { firstName: "", lastName: "" , surName: "",dni:"",age:'',height:'',gender:'',sport:"",typeMember:""},
      });
    const onSubmit=(formData)=>{
        console.log("Formulario Member",formData)
        const { foto:image } = formData
        const data = new FormData()
        image && data.append('photo', image[0], image[0].name)
        data.append('firstName', formData.firstName)
        data.append('lastName', formData.lastName)
        data.append('surName', formData.surName)
        data.append('dni', formData.dni)
        data.append('age', formData.age)
        data.append('height', formData.height)
        data.append('gender', formData.gender)
        data.append('sport',formData.sport)
        data.append('user', user._id)
        data.append('typeMember',formData.typeMember)
        crearMember.mutate(data,{
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
            <h2>Datos de Jugador/Entrenador</h2>
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
                                <Controller
                                    name="age"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Edad"
                                        type="number"
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="height"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="Estatura"
                                        type="number"
                                    />
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        select
                                        label="Genero"       
                                    >
                                        <MenuItem value={'masculino'}>
                                            Masculino
                                        </MenuItem>
                                        <MenuItem value={"femenino"}>
                                            Femenino
                                        </MenuItem>
                                        <MenuItem value={"otro"}>
                                            Otro
                                        </MenuItem>
                                    </TextField>
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
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
                                        <MenuItem value={'627af0a52216af7fbbf1a62b'}>
                                            Futbol
                                        </MenuItem>
                                        <MenuItem value={"627af4d4d64b3513060db609"}>
                                            Tenis
                                        </MenuItem>
                                        <MenuItem value={"627d904e83e260a4d300e955"}>
                                            Basquet
                                        </MenuItem>
                                    </TextField>
                                    )}
                                />
                            </div>
                            <div className='mx-2 my-2'>
                                <Controller
                                    name="typeMember"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        select
                                        label="Tipo de miembro"       
                                    >
                                        <MenuItem value={0}>
                                            Jugador
                                        </MenuItem>
                                        <MenuItem value={1}>
                                            Entrenador
                                        </MenuItem>
                                    </TextField>
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

export default RegisterMember
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ButtonChangeTheme from '../../components/ButtonChangeTheme';
import RegisterUser from './registerUser';
import RegisterAdmin from './registerAdmin';
import RegisterMember from './registerMember';
import RegisterTeam from './registerTeam';

const Register =()=>{
    const [userCreated,setUserCreated]=React.useState({state:false,rol:""})
    const [usuario,setUsuario]=React.useState()
    
    return (
        <div className='flex h-screen justify-center items-center'>
            <Card elevation={3} sx={{ minWidth: 275 ,minHeight:500}}>
                <CardContent>
                    {/* {userCreated.state?<RegisterTeam usuario={usuario} />:<RegisterUser setUserCreated={setUserCreated} setUsuario={setUsuario}/>} */}
                    {userCreated.state?(
                        (usuario.user.rol===0 && <RegisterAdmin usuario={usuario} />) || (usuario.user.rol===1 && <RegisterTeam usuario={usuario} />) || (usuario.user.rol===2 && <RegisterMember usuario={usuario} />)
                        ):<RegisterUser setUserCreated={setUserCreated} setUsuario={setUsuario}/>}
                </CardContent>
            </Card>
            <ButtonChangeTheme/>
    </div>
    )
} 
export default Register
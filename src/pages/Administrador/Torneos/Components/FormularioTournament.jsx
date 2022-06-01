import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AddCircleOutline, PhotoCamera } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
import ButtonImage from '../../../../components/ButtonImageUpload';
import { useCreateTournament } from '../../../../hooks/tournament';

// const Input = styled('input')({
//   display: 'none',
// });

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Input = styled('input')({
  display: 'none',
});

export default function FormularioTournament({editar}) {
    const crearTorneo = useCreateTournament()
  const [open, setOpen] = React.useState(false);
  const {
    control,
    handleSubmit,
    register
  } = useForm({
    defaultValues: { denomination: "", description: "", foto: "", registrationEndDate: "", registrationStartDate: "",  sport: "",
    tournamentEndDate: "",  tournamentStartDate: ""},
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit=(formData)=>{
      console.log("form",formData)
    const { foto:image } = formData
    const data = new FormData()
    image && data.append('photo', image[0], image[0].name)
    data.append('denomination', formData.denomination)
    data.append('description', formData.description)
    data.append('sport',formData.sport) 
    data.append('registrationStartDate',formData.registrationStartDate)  
    data.append('registrationEndDate',formData.registrationEndDate)  
    data.append('tournamentStartDate',formData.tournamentStartDate)    
    data.append('tournamentEndDate',formData.tournamentEndDate)   
    crearTorneo.mutate(data,{
        onError: () => { 
            handleClose()                 
          },
        onSuccess: () => {
            handleClose()
          },
    })
  }

  return (
    <div>
        <Button variant="outlined" size="large" startIcon={<AddCircleOutline/>} onClick={handleClickOpen}>
            Crear torneo
        </Button>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            {editar?"Crear torneos":"Editar Torneo"}   
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} >
            <DialogContent dividers>
            <div className='mx-2 my-2 grid grid-cols-2 gap-4'>
                                <Controller
                                    name="denomination"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Denominacion"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        fullWidth
                                        label="Descripcion"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                                <Controller
                                    name="registrationStartDate"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        type="date"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Fecha de inicio de registro"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                                <Controller
                                    name="registrationEndDate"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        type="date"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Fecha de fin de registro"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                                <Controller
                                    name="tournamentStartDate"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        type="date"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Fecha de inicio del torneo"
                                        variant="outlined"                
                                    />
                                    )}
                                />
                                <Controller
                                    name="tournamentEndDate"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        type="date"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Fecha del fin del torneo"
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
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
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
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" {...register("foto")}/>
                                    <Button variant="outlined" type="file" startIcon={<PhotoCamera />} component="span">
                                        Subir foto del torneo
                                    </Button>
                                </label>
                            </div>       
            </DialogContent>
            <DialogActions>
            <Button variant='contained' type="submit">
                Guardar
            </Button>
            </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}

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
import { useCreateMatch } from '../../../../../hooks/match';

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

export default function FormularioMatch({teams,idTournament}) {
  const crearMatch=useCreateMatch(idTournament)
  const [open, setOpen] = React.useState(false);
  const {
    control,
    handleSubmit,
    register
  } = useForm({
    defaultValues: { dateTime: "", teamA: "", teamB: "", location: ""}
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit=(formData)=>{
      const newMatch={...formData,tournament:idTournament}
      crearMatch.mutate(newMatch,{
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
            Crear partido
        </Button>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth
            maxWidth="sm"
        >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Agregar equipo al torneo  
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} >
            <DialogContent dividers>
              <div className='grid grid-cols-2 m-2 gap-2'>
                <Controller          name="teamA"
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
                                        label="Equipo 1"       
                                    >
                                      {teams.map((team,index)=>
                                      <MenuItem key={index} value={team._id}>
                                          {team.denomination}
                                      </MenuItem>)}
                                    </TextField>
                                    )}
                                />
                                <Controller
                                    name="teamB"
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
                                        label="Equipo 2"       
                                    >
                                        {teams.map((team,index)=>
                                      <MenuItem key={index} value={team._id}>
                                          {team.denomination}
                                      </MenuItem>)}
                                    </TextField>
                                    )}
                                /></div>
                                <div className='m-2'>
                                <Controller
                                    name="location"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Lugar"       
                                    />
                                    )}
                                /></div><div className='m-2'>
                                <Controller
                                    name="dateTime"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        type="datetime-local"
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        label="Fecha y hora"       
                                    />
                                    )}
                                />
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

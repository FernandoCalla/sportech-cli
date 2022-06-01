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
import { useAddTeamToTournament } from '../../../../../hooks/tournament';
import { useGetAllTeams } from '../../../../../hooks/team';

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

export default function FormularioAddTeam({idTournament,sport}) {  
  const Teams=useGetAllTeams()
  const teamsData= Teams?.data?.data?.teams ?? []
  const [open, setOpen] = React.useState(false);
  const AddTeam=useAddTeamToTournament(idTournament)
  const {
    control,
    handleSubmit,
    register
  } = useForm({
    defaultValues: { team: ""},
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit=(formData)=>{
    AddTeam.mutate(formData,{
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
            Agregar equipo
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
            
                                <Controller
                                    name="team"
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
                                        label="Equipo"       
                                    >
                                      {teamsData.filter((team)=>team.sport.denomination === sport).map((team,index)=>
                                        <MenuItem value={team._id}>
                                            {team.denomination}
                                        </MenuItem>)}                              
                                    </TextField>
                                    )}
                                />
                                      
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

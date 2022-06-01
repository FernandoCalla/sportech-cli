import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { PhotoCamera } from '@mui/icons-material';

const ButtonImage=({register,text})=>{
    const Input = styled('input')({
        display: 'none',
      });
    return (
        <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" {...register("foto")}/>
            <Button variant="outlined" type="file" startIcon={<PhotoCamera />} component="span">
                {text}
            </Button>
        </label>)
}

export default ButtonImage
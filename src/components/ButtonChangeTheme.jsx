import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext } from "../context/theme";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ButtonChangeTheme=()=>{
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    )
}
export default ButtonChangeTheme
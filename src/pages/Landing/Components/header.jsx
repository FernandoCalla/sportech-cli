import * as React from 'react';
import { Link } from 'react-router-dom'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link as ScrollLink, animateScroll } from 'react-scroll'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = [{path:'',name:'Sing in',icon:LockOpenIcon}, {path:'',name:'Sing up',icon:PersonAddAltIcon}];
const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
  activeClass: 'active'
}

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const toggleHome = () => {
    if (pathname !== '/') navigate('/')
    animateScroll.scrollToTop()
  }
 
  return (
    <header className="sticky top-0 z-20 flex h-20 w-full justify-center bg-white p-4 shadow-md">
      <div className="mx-4 flex w-full items-center justify-between gap-4 xl:w-[1280px]">
        <img
          src="src/assets/SporTechLogo.png"
          alt="logo"
          onClick={toggleHome}
          className="h-full cursor-pointer"
        />
        <nav className="hidden flex-auto md:block">
          <ul className="flex justify-center gap-4">
            <li className="link">
              <ScrollLink to="torneos" {...scrollProps}>
                Torneos
              </ScrollLink>
            </li>
            <li className="link">
              <ScrollLink to="equipos" {...scrollProps}>
                Equipos
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">          
            <Link to="/login" className="btn_black">
              Iniciar sesión
            </Link>          
        </div>
      </div>
    </header>
  );
};
export default Header;
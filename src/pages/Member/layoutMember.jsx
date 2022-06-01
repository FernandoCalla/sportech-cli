import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function memberNavConfig() {
  return {
    links: [
      { path: 'perfil', name: 'My perfil', icon: AccountCircleIcon }
    ]
  }
}

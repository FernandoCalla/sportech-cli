import HomeIcon from '@mui/icons-material/Home';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function teamNavConfig() {
  return {
    links: [
      { path: '.', name: 'Inicio', icon: HomeIcon },
      { path: 'perfil', name: 'Perfil Team', icon: AccountCircleIcon },
      { path: 'partidos', name: 'Partidos', icon: SportsBasketballIcon },
      { path: 'torneos', name: 'Torneos', icon: EmojiEventsIcon }
    ]
  }
}

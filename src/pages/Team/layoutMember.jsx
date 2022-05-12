import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export function teamNavConfig() {
  return {
    links: [
      { path: '.', name: 'Inicio', icon: HomeIcon },
      { path: 'perfil', name: 'Perfil Team', icon: SportsBasketballIcon }
    ]
  }
}

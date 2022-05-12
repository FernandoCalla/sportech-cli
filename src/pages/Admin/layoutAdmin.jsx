import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export function adminNavConfig() {
  return {
    links: [
      { path: '.', name: 'Inicio', icon: HomeIcon },
      { path: 'torneos', name: 'Torneos', icon: EmojiEventsIcon }
    ]
  }
}

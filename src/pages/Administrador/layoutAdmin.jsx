import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import GroupsIcon from '@mui/icons-material/Groups';

export function adminNavConfig() {
  return {
    links: [
      { path: 'torneos', name: 'Torneos', icon: EmojiEventsIcon },
      { path: 'equipos', name: 'Equipos', icon: GroupsIcon },
      { path: 'jugadores', name: 'Jugadores', icon: SportsHandballIcon }
    ]
  }
}

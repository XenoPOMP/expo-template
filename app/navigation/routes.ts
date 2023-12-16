import { HomeScreen, SettingsScreen } from '@/components/screens';
import { IRoute } from '@/navigation/navigation.types';

/**
 * All routes of app.
 */
export const routes: IRoute[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Settings',
    component: SettingsScreen,
  },
];

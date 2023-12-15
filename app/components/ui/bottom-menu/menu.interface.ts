import { LucideIcon } from 'lucide-react-native';

import { TypeRootStackParamList } from '@/navigation/navigation.types';

export interface IMenuItem {
  icon: LucideIcon;
  path: keyof TypeRootStackParamList;
}

export type TypeNav = (path: keyof TypeRootStackParamList) => void;

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface LayoutScreenProps {
  safeInsets?: Partial<
    Record<keyof ReturnType<typeof useSafeAreaInsets>, boolean>
  >;

  title?: string;
}

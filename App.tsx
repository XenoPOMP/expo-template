import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HelloWorld } from '@/components';
import { Application } from '@/layout';

export default function App() {
  return (
    <SafeAreaProvider>
      <Application />
    </SafeAreaProvider>
  );
}

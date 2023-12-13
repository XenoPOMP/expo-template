import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Application } from '@/layout';

export default function App() {
  return (
    <SafeAreaProvider>
      <Application />
    </SafeAreaProvider>
  );
}

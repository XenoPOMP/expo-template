import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';

import { I18nProvider } from '@/components/providers';
import { Application } from '@/layout';
import store from '@/redux';

const queryClient = new QueryClient();

export default function App() {
  return (
    <I18nProvider>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <Application />
          </ReduxProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </I18nProvider>
  );
}

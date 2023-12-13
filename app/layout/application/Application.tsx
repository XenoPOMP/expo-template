import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HelloWorld } from '@/components';

const Application = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      className={'bg-purple-950 h-full'}
      style={{
        paddingTop: top,
      }}
    >
      <HelloWorld className={'text-white'} />

      <StatusBar style='auto' />
    </View>
  );
};

export default Application;

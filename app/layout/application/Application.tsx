import cn from 'classnames';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HelloWorld } from '@/components';
import { flexCenter } from '@/styles/tailwind/utilities';

const Application = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      className={cn('bg-purple-950 h-full', flexCenter)}
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <HelloWorld className={'text-white'} />

      <StatusBar style='auto' />
    </View>
  );
};

export default Application;

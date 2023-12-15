import cn from 'classnames';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { flexCenter } from '@/styles/tailwind/utilities';

const Application = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return (
    <View
      className={cn('bg-purple-950 h-full', flexCenter)}
      style={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
      }}
    >
      <Text className={'text-2xl text-white'}>Hello world!</Text>

      <Text className={'text-2xl text-white'}>Kalnia font</Text>

      <StatusBar style='auto' />
    </View>
  );
};

export default Application;

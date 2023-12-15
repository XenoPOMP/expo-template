import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import fontsDeclaration from '@/fonts/fontsDeclaration';

const HomeScreen: FC<{}> = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: top,
      }}
    >
      <Text
        className={'text-white text-2xl'}
        style={{
          fontFamily: fontsDeclaration.SFProDisplay.Regular,
        }}
      >
        Home
      </Text>
    </View>
  );
};

export default HomeScreen;

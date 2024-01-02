import { VariableFC } from '@xenopomp/advanced-types';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LayoutScreen } from '@/components/screens';
import fontsDeclaration from '@/fonts/fontsDeclaration';
import { useLocalization } from '@/hooks';

const HomeScreen: VariableFC<typeof LayoutScreen, {}, 'children' | 'title'> = ({
  ...props
}) => {
  const { loc } = useLocalization();

  return (
    <LayoutScreen title={'Main'} {...props}>
      <Text
        className={'text-white text-2xl'}
        style={{
          fontFamily: fontsDeclaration.SFProDisplay.Regular,
        }}
      >
        {loc('helloWorld')}
      </Text>
    </LayoutScreen>
  );
};

export default HomeScreen;

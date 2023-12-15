import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import fontsDeclaration from '@/fonts/fontsDeclaration';

const SettingsScreen: VariableFC<typeof View, {}, 'children' | 'style'> = ({
  className,
  ...props
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      className={cn(className)}
      style={{
        paddingTop: top,
      }}
      {...props}
    >
      <Text
        className={'text-white'}
        style={{
          fontSize: 30,
        }}
      >
        System font
      </Text>

      <Text
        className={'text-white'}
        style={{
          fontFamily: fontsDeclaration.Kalnia,
          fontSize: 30,
        }}
      >
        Kalnia font
      </Text>

      <Text
        className={'text-white'}
        style={{
          fontFamily: fontsDeclaration.SFProDisplay.Bold,
          fontSize: 30,
        }}
      >
        SF Pro Display font (Bold)
      </Text>
    </View>
  );
};

export default SettingsScreen;

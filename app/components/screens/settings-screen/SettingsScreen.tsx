import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LayoutScreen } from '@/components/screens';
import fontsDeclaration from '@/fonts/fontsDeclaration';

const SettingsScreen: VariableFC<
  typeof LayoutScreen,
  {},
  'title' | 'children'
> = ({ ...props }) => {
  return <LayoutScreen title={'Settings'} {...props}></LayoutScreen>;
};

export default SettingsScreen;

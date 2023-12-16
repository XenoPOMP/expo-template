import { VariableFC } from '@xenopomp/advanced-types';
import { FC } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { BottomMenuProps } from '@/components/ui/bottom-menu/BottomMenu.props';
import { routes } from '@/navigation/routes';

import { TypeRootStackParamList } from './navigation.types';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigation: VariableFC<
  typeof Stack.Navigator,
  {},
  'children' | 'screenOptions'
> = ({ ...props }) => {
  return (
    <Stack.Navigator
      {...props}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backfaceVisibility: 'hidden',
          backgroundColor: 'transparent',
        },
      }}
    >
      {routes.map(({ ...route }, index) => {
        return (
          <Stack.Screen {...route} key={`screen-${index}-${route.name}`} />
        );
      })}
    </Stack.Navigator>
  );
};

export default PrivateNavigation;

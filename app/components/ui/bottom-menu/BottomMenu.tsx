import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MenuItem from '@/components/ui/menu-item/MenuItem';

import { BottomMenuProps } from './BottomMenu.props';
import { menuData } from './menu.data';

const BottomMenu: VariableFC<
  typeof View,
  BottomMenuProps,
  'children' | 'style'
> = ({ className, currentRoute, navigate, ...props }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className={cn('bg-green-300 ', className)}
      style={{
        paddingBottom: bottom,
      }}
      {...props}
    >
      {menuData.map((item, index) => {
        return (
          <>
            <MenuItem item={item} navigate={navigate} key={item.path} />
          </>
        );
      })}
    </View>
  );
};

export default BottomMenu;

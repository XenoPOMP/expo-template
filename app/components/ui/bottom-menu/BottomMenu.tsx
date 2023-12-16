import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
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

  const padding = 20;

  return (
    <View
      className={cn(
        `flex-row px-[${padding}] justify-center border-purple-800`,
        className
      )}
      style={{
        paddingTop: padding,
        paddingBottom: bottom + padding,
        gap: 20,
        borderTopWidth: 1,
      }}
      {...props}
    >
      {menuData.map((item, index) => {
        return (
          <>
            <MenuItem
              currentRoute={currentRoute}
              item={item}
              navigate={navigate}
              key={`${item.path}-${index}`}
            />
          </>
        );
      })}
    </View>
  );
};

export default BottomMenu;

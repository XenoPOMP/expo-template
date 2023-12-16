import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Pressable, Text } from 'react-native';

import { MenuItemProps } from './MenuItem.props';

const MenuItem: VariableFC<typeof Pressable, MenuItemProps, 'children'> = ({
  className,
  item,
  navigate,
  currentRoute,
  onPress,
  key,
  ...props
}) => {
  const { icon: Icon } = item;

  const isActive = currentRoute === item.path;

  return (
    <Pressable
      className={cn(className)}
      onPress={ev => {
        onPress?.(ev);

        navigate(item.path);
      }}
      key={key}
      {...props}
    >
      <Icon
        width={25}
        className={cn(isActive ? 'text-purple-600' : 'text-purple-900')}
      />
    </Pressable>
  );
};

export default MenuItem;

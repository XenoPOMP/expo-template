import { Defined, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { appConstants } from '@/../app.constants';
import fontsDeclaration from '@/fonts/fontsDeclaration';

import { LayoutScreenProps } from './LayoutScreen.props';

const LayoutScreen: VariableFC<typeof View, LayoutScreenProps, 'style'> = ({
  safeInsets,
  children,
  className,
  title,
  ...props
}) => {
  const safeAreaInsets = useSafeAreaInsets();

  const { padding } = appConstants;

  const defaultSafeInsets: Defined<LayoutScreenProps['safeInsets']> = {
    top: true,
    left: false,
    right: false,
    bottom: false,
    ...safeInsets,
  };

  /**
   * Returns safe area inset value, if it is enabled.
   *
   * @param key
   */
  const addInset = (key: keyof typeof defaultSafeInsets): number => {
    if (defaultSafeInsets[key]) {
      return safeAreaInsets[key];
    }

    return 0;
  };

  return (
    <View
      className={cn('flex-1', className)}
      style={{
        paddingTop: padding + addInset('top'),
        paddingBottom: padding + addInset('bottom'),
        paddingLeft: padding + addInset('left'),
        paddingRight: padding + addInset('right'),
      }}
      {...props}
    >
      {title && (
        <Text
          className={cn('text-white')}
          style={{
            fontSize: 30,
            fontFamily: fontsDeclaration.SFProDisplay.Bold,
          }}
        >
          {title}
        </Text>
      )}

      {children}
    </View>
  );
};

export default LayoutScreen;

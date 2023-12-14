import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Text, View } from 'react-native';

import { useAppSelector } from '@/redux/hooks';

import styles from './hello-world.styles';

const HelloWorld: VariableFC<typeof View, {}, 'children'> = ({
  className,
  ...props
}) => {
  const { appName } = useAppSelector(state => state.appSettings);

  return (
    <View className={cn('', styles.wrap, className)} {...props}>
      <Text className={cn('', styles.helloWorld)}>Hello world!</Text>

      <Text className={cn('', styles.appName)}>{appName}</Text>

      <View className={'w-screen p-[20]'}>
        <View className={cn(styles.features.self)}>
          <Text className={cn('', styles.features.label)}>Features</Text>

          <View className={cn(styles.features.item.self)}>
            <Text className={cn(styles.features.item.text)}>React Native</Text>
          </View>

          <View className={cn(styles.features.item.self)}>
            <Text className={cn(styles.features.item.text)}>TypeScript</Text>
          </View>

          <View className={cn(styles.features.item.self)}>
            <Text className={cn(styles.features.item.text)}>Redux Toolkit</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HelloWorld;

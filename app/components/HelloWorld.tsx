import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Text } from 'react-native';

const HelloWorld: VariableFC<typeof Text, {}, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <Text className={cn('text-2xl font-bold italic', className)} {...props}>
      Hello world!
    </Text>
  );
};

export default HelloWorld;

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { createContext, useContext, useEffect } from 'react';
import { View, ViewStyle } from 'react-native';

import { constraintNumber } from '@/utils';

import {
  type GridCellProps,
  type GridProps,
  type IGridContext,
} from './grid.types';

export const GridContext = createContext<IGridContext>({} as IGridContext);

const Grid: VariableFC<
  typeof View,
  GridProps & { style?: ViewStyle },
  'style'
> & {
  Cell: VariableFC<typeof View, GridCellProps & { style?: ViewStyle }, 'style'>;
} = ({ className, children, columns = 1, rows = 1, ...props }) => {
  return (
    <GridContext.Provider
      value={{
        template: {
          columns,
          rows,
        },
      }}
    >
      <View className={cn('flex-row flex flex-wrap', className)} {...props}>
        {children}
      </View>
    </GridContext.Provider>
  );
};

Grid.Cell = ({
  className,
  children,
  gridRows = 1,
  gridColumns = 1,
  ...props
}) => {
  const {
    template: { columns, rows },
  } = useContext(GridContext);

  return (
    <View className={cn(className)} {...props}>
      {children}
    </View>
  );
};

export default Grid;

export interface IGridContext {
  template: Required<Pick<GridProps, 'columns' | 'rows'>>;
}

export interface GridProps {
  columns?: number;
  rows?: number;
}

export interface GridCellProps
  extends Partial<
    Record<
      `grid${Capitalize<keyof Pick<GridProps, 'columns' | 'rows'>>}`,
      number
    >
  > {}

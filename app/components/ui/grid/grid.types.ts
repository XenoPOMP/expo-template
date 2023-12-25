export interface IGridContext {
  template: Required<Pick<GridProps, 'columns' | 'rows'>>;
}

export interface GridProps {
  columns?: number;
  rows?: number;
}

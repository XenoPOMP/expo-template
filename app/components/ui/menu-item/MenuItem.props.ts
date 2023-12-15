import { BottomMenuProps } from '@/components/ui/bottom-menu/BottomMenu.props';
import { IMenuItem } from '@/components/ui/bottom-menu/menu.interface';

export interface MenuItemProps extends BottomMenuProps {
  item: IMenuItem;
}

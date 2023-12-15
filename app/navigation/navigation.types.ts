import { ComponentType } from 'react';

/**
 * List of all pages in application.
 */
export type TypeRootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}

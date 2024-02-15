import { Dispatch } from 'react';

export type RangeType = { range: number[] };
export type RangeProviderType = {
  range: number[];
  dispatch: Dispatch<ActionType>;
};
export interface ActionType {
  type: string;
  payload?: any;
}

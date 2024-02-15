import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { ActionType, RangeProviderType, RangeType } from '../types/types';
import { STARTING_RANGE } from '../types/constant';

const RangeContext = createContext<RangeProviderType | null>(null);

const initialState: RangeType = {
  range: STARTING_RANGE,
};

function reducer(state: RangeType, action: ActionType): RangeType {
  // Use this StateType on the reducer func itself so TS understands that we will be RETURNING a state (which is typed)
  switch (action.type) {
    case 'rangeChanged':
      return {
        ...state,
        range: action.payload,
      };
    default:
      throw new Error('Action is unknown');
  }
}

function RangeProvider({ children }: PropsWithChildren) {
  const [{ range }, dispatch] = useReducer(reducer, initialState);

  return (
    <RangeContext.Provider
      value={{
        range,
        dispatch,
      }}
    >
      {children}
    </RangeContext.Provider>
  );
}

export default RangeProvider;

export const useRangeContext = () => {
  const context = useContext(RangeContext);

  // if `null`, throw an error
  if (context === null || context === undefined) {
    throw new Error('useRangeContext was used outside of its Provider');
  }

  return context;
};

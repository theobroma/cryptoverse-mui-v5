import type { RootState } from '../configureStore';

export const coinsSelector = (state: RootState) => {
  return state.coins;
};

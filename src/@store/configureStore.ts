// example - https://github.com/theobroma/rtk-query-toptal-example/blob/41ea72e4ad62ff6ec4a1e2a8f84b17301f7577e0/src/shared/redux/store.ts
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

import type { Middleware, MiddlewareAPI, Reducer } from '@reduxjs/toolkit';
import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

import { cryptoApi } from './coins/crypto/cryptoApi';
import { coinsReducer, coinsSlice } from './coins/slice';
import { uiReducer, uiSlice } from './ui/slice';
// import { RESET_STATE_ACTION_TYPE } from './actions/resetState';

const logger = createLogger({
  collapsed: true,
});

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!');
      // toast.warn({ title: 'Async error!', message: action.error.data.message });
    }

    return next(action);
  };

const reducers = {
  [coinsSlice.name]: coinsReducer,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [uiSlice.name]: uiReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const rootReducer: Reducer<RootState> = (state, action) => {
  //   if (action.type === RESET_STATE_ACTION_TYPE) {
  //     state = {} as RootState;
  //   }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      logger,
      rtkQueryErrorLogger,
      cryptoApi.middleware,
    ]),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

// eslint-disable-next-line import/no-unused-modules
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

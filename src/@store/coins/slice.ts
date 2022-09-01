import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CoinrankingAPI } from '../../@api/coinranking-api';
import type { CoinsResponseType } from '../../@types';
import { CoinsResponseSchema } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const coinsInitialState = {
  data: {
    coins: Array(0),
    stats: {},
  } as CoinsResponseType['data'],
  // utils
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

// https://stackoverflow.com/questions/67279037/the-thunkapi-getstate-method-does-not-correctly-infer-the-state-type
export const getCoinsTC = createAsyncThunk<
  CoinsResponseType,
  void,
  { rejectValue: string }
>('coins/getCoins', async (_, thunkAPI) => {
  // const state = thunkAPI.getState();
  try {
    await waitForMe(300);
    const res = await CoinrankingAPI.getCoins();

    // ZOD validation
    try {
      CoinsResponseSchema.parse(res.data);
    } catch (error) {
      console.log(error);
    }

    return res.data;
  } catch (err: any) {
    // return thunkAPI.rejectWithValue(err.response.data);
    return thunkAPI.rejectWithValue(
      `Server Error fetching coins. Error: ${JSON.stringify(
        err.response.data,
      )}`,
    );
  }
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState: coinsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoinsTC.pending, (state) => {
      state.isLoading = true;
      //   clear data
      state.data = {
        coins: Array(20).fill('none'), // for skeletons
        stats: {},
      } as CoinsResponseType['data'];
      state.isSuccess = false;
      state.isError = false;
      state.error = '';
    });
    builder
      .addCase(getCoinsTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = action.payload.data;
          // mimic no results
          // state.data = {
          //   coins: Array(0),
          //   stats: {},
          // } as CoinsResponseType['data'];
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getCoinsTC.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isError = true;
        state.isLoading = false;
        // console.log('getCoinsTC.rejected');
      });
  },
});

export const coinsReducer = coinsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { KeitaroAPI } from '../../@api/keitaro-api';

const affiliateNetworksInitialState = {
  affiliateNetworks: [] as any,
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export type affiliateNetworksInitialStateType =
  typeof affiliateNetworksInitialState;

// https://stackoverflow.com/questions/67279037/the-thunkapi-getstate-method-does-not-correctly-infer-the-state-type
export const getAffiliateNetworksTC = createAsyncThunk<any, void, any>(
  'affiliate-networks/getAffiliateNetworks',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    try {
      //   await waitForMe(300);
      const res = await KeitaroAPI.getAffiliateNetworks();
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const affiliateNetworksSlice = createSlice({
  name: 'affiliate-networks',
  initialState: affiliateNetworksInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAffiliateNetworksTC.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getAffiliateNetworksTC.fulfilled, (state, action) => {
      //   if (action.payload) {
      //     state.location = action.payload.location;
      //     state.currentWeather = action.payload.current;
      //     state.forecast = action.payload.forecast;
      //   }
      state.isFetching = false;
      state.isSuccess = true;
    });
    builder.addCase(getAffiliateNetworksTC.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      if (action.payload instanceof Error) {
        state.errorMessage = action.payload.message;
      }
    });
  },
});

export const affiliateNetworksReducer = affiliateNetworksSlice.reducer;

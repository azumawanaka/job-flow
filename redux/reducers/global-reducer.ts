import { createSlice } from '@reduxjs/toolkit';

interface GlobalState {
  loading: boolean;
  error: string | null;
}

const initialState: GlobalState = {
  loading: false,
  error: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalLoading(state, action) {
      state.loading = action.payload;
    },
    setGlobalError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setGlobalLoading, setGlobalError } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

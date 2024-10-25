import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRandomRecipe } from '../api/api';
import { ApiResponse } from '../types/types';

interface DataState {
  data: ApiResponse | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchRecipe = createAsyncThunk('data/fetchRecipe', async () => {
  const response = await fetchRandomRecipe();
  return response as ApiResponse;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch recipe';
      });
  },
});

export default dataSlice.reducer;

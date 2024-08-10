import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: 'Kathiresh',
  reducers: {
    setName: (state, action) => action.payload,
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;

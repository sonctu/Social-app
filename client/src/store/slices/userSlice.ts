import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    getUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;

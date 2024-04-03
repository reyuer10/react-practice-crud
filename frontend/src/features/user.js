import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;

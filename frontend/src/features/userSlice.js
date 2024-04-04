import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  HandleFetchUserData,
  HandleNewUserData,
} from "../assets/services/userApi";

const initialValue = {
  user: [],
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      const response = await HandleFetchUserData();
      return response;
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }
);

export const addNewUserData = createAsyncThunk(
  "user/addNewUserData",
  async ({ userName, userPassword }) => {
    try {
      const response = await HandleNewUserData(userName, userPassword);
      return response;
    } catch (error) {
      console.log("Error adding new employee", error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(addNewUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../services/types"

const initialState: IUserState = {
  isLoggedIn: false,
  userName: ""
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;

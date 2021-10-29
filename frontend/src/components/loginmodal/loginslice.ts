import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../services/types"

const initialState: IUserState = {
  isLoggedIn: false,
  userName: undefined,
  favorites: []
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginAsUser(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.userName = undefined;
    },
    setFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload]
    },
    removeFavorite(state, action) {
      const index = state.favorites.indexOf(action.payload, 0);
      if (index > -1) {
        const temp = [...state.favorites];
        temp.splice(index, 1);
        state.favorites = temp;
      }
    }
  },
});

export const { loginAsUser, logOut, setFavorite, removeFavorite } = UserSlice.actions;
export default UserSlice.reducer;

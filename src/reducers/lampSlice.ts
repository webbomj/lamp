import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  count: number;
}

const initialState: UserState = {
  count: 0,
};

export const recipesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setSingleRecipe(state, action: PayloadAction<RecipeItem>) {
    //   state.singleRecipe = action.payload;
    // },
    // recipeFetching(state) {
    //   state.isLoading = true;
    // }
  },
});

export default recipesSlice.reducer;

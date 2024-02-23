import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(window?.localStorage.getItem("theme") as string) ?? "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
  },
});

export default themeSlice.reducer;

export function SetTheme(value: string) {
  return (dispatch: any) => {
    dispatch(themeSlice.actions.setTheme(value));
  };
}

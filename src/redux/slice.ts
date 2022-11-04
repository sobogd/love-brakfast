import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { IState } from "../interfaces";
import { ELangs } from "../enums";

export const slice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    toggleGeneralMenu: (state: IState) => {
      state.isGeneralMenuOpen = !state.isGeneralMenuOpen;
    },
  },
});

export const { toggleGeneralMenu } = slice.actions;

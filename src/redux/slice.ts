import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { IState } from "../interfaces";
import { EMenuTypes } from "../enums";

export const slice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    toggleMenu: (state: IState, action: PayloadAction<EMenuTypes>) => {
      (Object.keys(state.isMenuOpened) as typeof EMenuTypes[keyof typeof EMenuTypes][]).forEach(
        (key: EMenuTypes) => {
          if (key === action.payload) {
            state.isMenuOpened[key] = !state.isMenuOpened[key];
          } else {
            state.isMenuOpened[key] = false;
          }
        }
      );
    },
    closeMenus: (state: IState) => {
      state.isMenuOpened[EMenuTypes.GENERAL] = false;
      state.isMenuOpened[EMenuTypes.LANG] = false;
    },
  },
});

export const { toggleMenu, closeMenus } = slice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { IState } from "../interfaces";
import { EMenuTypes } from "../enums";
import { menuSearch } from "../api";

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
    setPage: (state: IState, action: PayloadAction<any>) => {
      state.page = action.payload;
      state.isMenuOpened[EMenuTypes.GENERAL] = false;
      state.isMenuOpened[EMenuTypes.LANG] = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(menuSearch.pending, (state) => {});
    builder.addCase(menuSearch.rejected, (state) => {});
    builder.addCase(menuSearch.fulfilled, (state, action) => {
      state.menu = action.payload;
    });
  },
});

export const { toggleMenu, closeMenus, setPage } = slice.actions;

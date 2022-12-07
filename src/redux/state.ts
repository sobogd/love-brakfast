import { ELangs } from "../enums";
import { IState } from "../interfaces";

export const initialState: IState = {
  lang: ELangs.EN,
  isMenuOpened: {
    general: false,
    lang: false,
  },
  menu: [],
};

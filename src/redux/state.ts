import { ELangs } from "../enums";
import { IState } from "../interfaces";

export const initialState: IState = {
  lang: ELangs.EN,
  isLangMenuOpen: false,
  isGeneralMenuOpen: false,
};

import { ELangs } from "../enums";
import { IState } from "../interfaces";

export const langSelector = (state: IState): ELangs => state.lang;
export const isGeneralMenuOpenSelector = (state: IState): boolean =>
  state.isGeneralMenuOpen;

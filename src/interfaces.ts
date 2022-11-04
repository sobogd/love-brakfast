import { ELangs } from "./enums";

export interface IState {
  lang: ELangs;
  isLangMenuOpen: boolean;
  isGeneralMenuOpen: boolean;
}

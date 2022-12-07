import { ELangs, EMenuTypes } from "./enums";

export interface IState {
  lang: ELangs;
  isMenuOpened: {
    [EMenuTypes.GENERAL]: boolean;
    [EMenuTypes.LANG]: boolean;
  };
  menu: any;
}

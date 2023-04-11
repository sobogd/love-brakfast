import { ELangs, EMenuTypes } from "./enums";

export interface IState {
  lang: ELangs;
  isMenuOpened: {
    [EMenuTypes.GENERAL]: boolean;
    [EMenuTypes.LANG]: boolean;
  };
  menu: {
    id: number;
    name: string;
    positions: {
      id: number;
      name: string;
      price: string;
    }[]
  }[];
  page: any;
}

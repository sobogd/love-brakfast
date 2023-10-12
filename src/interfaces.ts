import { ELangs, EMenuTypes } from "./enums";

export interface IState {
  lang: ELangs;
  isMenuOpened: {
    [EMenuTypes.GENERAL]: boolean;
    [EMenuTypes.LANG]: boolean;
  };
  menu: IPublicMenuCategory[];
  page: any;
}

export interface IPublicMenuItem {
  id: number;
  name: string;
  price: number;
  t: { code: string; title: string }[];
  add: {
    id: number;
    name: string;
    price: number;
    t: { code: string; title: string }[];
  }[];
}

export interface IPublicMenuCategory {
  id: number;
  name: string;
  t: { code: string; title: string }[];
  items: IPublicMenuItem[];
}

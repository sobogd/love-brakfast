import { ELangs, EMenuTypes } from "./enums";

export const MENU_BACKGROUNDS = {
  [EMenuTypes.GENERAL]: {
    src: "/background2.jpeg",
    alt: "background.general",
  },
  [EMenuTypes.LANG]: {
    src: "/background2.jpeg",
    alt: "background.lang",
  },
};

export const GENERAL_MENU_ITEMS = [
  { name: "menu.general.home", link: "home" },
  { name: "menu.general.menu", link: "menu" },
  // { name: "menu.general.aboutUs", link: "/aboutUs" },
  // { name: "menu.general.ourRestaraunt", link: "/ourRestaraunt" },
  { name: "menu.general.contacts", link: "contacts" },
  // { name: "menu.general.reservation", link: "reservation" },
];

export const LANG_MENU_ITEMS = [
  { name: "menu.lang." + ELangs.TR, reduction: ELangs.TR },
  { name: "menu.lang." + ELangs.EN, reduction: ELangs.EN },
  // { name: "menu.lang." + ELangs.UA, reduction: ELangs.UA },
  { name: "menu.lang." + ELangs.RU, reduction: ELangs.RU },
];

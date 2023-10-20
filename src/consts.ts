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

export const positions = [
  // сырнкии
  { number: 1, price: 155, descr: false, category: 1, img: "/pos.jpg" },
  { number: 2, price: 155, descr: false, category: 1, img: "/pos.jpg" },
  { number: 3, price: 155, descr: false, category: 1, img: "/pos.jpg" },
  { number: 4, price: 155, descr: false, category: 1, img: "/pos.jpg" },
  { number: 5, price: 155, descr: false, category: 1, img: "/pos.jpg" },
  { number: 6, price: 205, descr: false, category: 1, img: "/pos6.jpg" },
  { number: 7, price: 205, descr: false, category: 1, img: "/pos6.jpg" },
  { number: 8, price: 205, descr: false, category: 1, img: "/pos6.jpg" },
  { number: 9, price: 205, descr: false, category: 1, img: "/pos6.jpg" },
  { number: 10, price: 205, descr: false, category: 1, img: "/pos6.jpg" },
  // яишца
  { number: 11, price: 80, descr: true, category: 12, img: "/pos11.jpg" },
  { number: 12, price: 80, descr: true, category: 12, img: "/pos12.jpg" },
  { number: 13, price: 80, descr: true, category: 12, img: "" },
  // блины
  { number: 19, price: 135, descr: false, category: 13, img: "" },
  { number: 20, price: 135, descr: false, category: 13, img: "" },
  { number: 21, price: 155, descr: false, category: 13, img: "/pos21.jpg" },
  { number: 14, price: 95, descr: true, category: 13, img: "/pos14.jpg" },
  { number: 15, price: 95, descr: true, category: 13, img: "/pos14.jpg" },
  { number: 16, price: 95, descr: true, category: 13, img: "/pos14.jpg" },
  { number: 17, price: 95, descr: true, category: 13, img: "/pos14.jpg" },
  { number: 18, price: 95, descr: true, category: 13, img: "/pos14.jpg" },
  // каши
  { number: 22, price: 110, descr: true, category: 14, img: "/pos22.jpg" },
  { number: 23, price: 110, descr: true, category: 14, img: "/pos24.jpg" },
  { number: 24, price: 110, descr: true, category: 14, img: "/pos23.jpg" },
  { number: 25, price: 110, descr: true, category: 14, img: "/pos22.jpg" },
  { number: 26, price: 110, descr: true, category: 14, img: "/pos24.jpg" },
  { number: 27, price: 110, descr: true, category: 14, img: "/pos27.jpg" },
  // вафли
  { number: 28, price: 165, descr: true, category: 15, img: "/pos28.jpg" },
  { number: 29, price: 165, descr: true, category: 15, img: "/pos28.jpg" },
  { number: 30, price: 165, descr: true, category: 15, img: "/pos28.jpg" },
  // toasts
  { number: 34, price: 195, descr: true, category: 2, img: "/pos34.jpg" },
  { number: 35, price: 125, descr: true, category: 2, img: "" },
  // soups
  { number: 41, price: 95, descr: false, category: 3, img: "/pos41.jpg" },
  { number: 42, price: 95, descr: false, category: 3, img: "/pos42.jpg" },
  // sandviches
  { number: 46, price: 165, descr: false, category: 4, img: "/pos46.jpg" },
  { number: 47, price: 165, descr: false, category: 4, img: "/pos47.jpg" },
  { number: 48, price: 145, descr: false, category: 4, img: "/pos48.jpg" },
  // bowls
  { number: 51, price: 220, descr: true, category: 5, img: "/pos51.jpg" },
  { number: 52, price: 220, descr: true, category: 5, img: "/pos51.jpg" },
  { number: 53, price: 220, descr: true, category: 5, img: "/pos53.jpg" },
  { number: 54, price: 220, descr: true, category: 5, img: "/pos53.jpg" },
  { number: 55, price: 185, descr: true, category: 5, img: "/pos55.jpg" },
  { number: 56, price: 185, descr: true, category: 5, img: "/pos55.jpg" },
  { number: 57, price: 165, descr: true, category: 5, img: "/pos57.jpg" },
  // salats
  { number: 59, price: 95, descr: false, category: 6, img: "" },
  { number: 60, price: 165, descr: false, category: 6, img: "/pos60.jpg" },
  // hot drinks
  { number: 69, price: 55, descr: false, category: 7, img: "" },
  { number: 70, price: 70, descr: false, category: 7, img: "" },
  { number: 71, price: 40, descr: false, category: 7, img: "" },
  { number: 72, price: 60, descr: false, category: 7, img: "" },
  { number: 73, price: 50, descr: false, category: 7, img: "" },
  { number: 74, price: 70, descr: false, category: 7, img: "" },
  { number: 75, price: 65, descr: false, category: 7, img: "" },
  { number: 76, price: 85, descr: false, category: 7, img: "" },
  { number: 77, price: 85, descr: false, category: 7, img: "" },
  { number: 78, price: 65, descr: false, category: 7, img: "" },
  { number: 79, price: 70, descr: false, category: 7, img: "" },
  { number: 80, price: 55, descr: false, category: 7, img: "" },
  { number: 81, price: 30, descr: false, category: 7, img: "" },
  // teas
  { number: 61, price: 120, descr: true, category: 8, img: "" },
  { number: 62, price: 60, descr: true, category: 8, img: "" },
  { number: 63, price: 60, descr: true, category: 8, img: "" },
  { number: 64, price: 100, descr: true, category: 8, img: "" },
  { number: 65, price: 100, descr: true, category: 8, img: "" },
  { number: 66, price: 100, descr: true, category: 8, img: "" },
  // cold drinks
  { number: 86, price: 70, descr: false, category: 9, img: "" },
  { number: 87, price: 55, descr: false, category: 9, img: "" },
  { number: 88, price: 70, descr: false, category: 9, img: "" },
  { number: 89, price: 75, descr: false, category: 9, img: "" },
  { number: 90, price: 75, descr: false, category: 9, img: "" },
  { number: 91, price: 105, descr: false, category: 9, img: "" },
  { number: 92, price: 95, descr: false, category: 9, img: "" },
  { number: 93, price: 85, descr: false, category: 9, img: "" },
  { number: 94, price: 85, descr: false, category: 9, img: "" },
  { number: 95, price: 35, descr: false, category: 9, img: "" },
  { number: 96, price: 35, descr: false, category: 9, img: "" },
  { number: 97, price: 50, descr: false, category: 9, img: "" },
  { number: 98, price: 35, descr: false, category: 9, img: "" },
  { number: 99, price: 35, descr: false, category: 9, img: "" },
  { number: 100, price: 50, descr: false, category: 9, img: "" },
  // desserts
  { number: 105, price: 105, descr: false, category: 10, img: "" },
  { number: 106, price: 105, descr: false, category: 10, img: "" },
  { number: 107, price: 60, descr: false, category: 10, img: "" },
  { number: 108, price: 60, descr: false, category: 10, img: "" },
  { number: 109, price: 105, descr: false, category: 10, img: "" },
];

export const categories = [
  { number: 1 }, // сырники
  { number: 12 }, // яйца
  { number: 13 }, // блинчики
  { number: 14 }, // каши
  { number: 15 }, // вафли
  { number: 2 }, // toasts
  { number: 3 }, // soups
  { number: 4 }, // sandviches
  { number: 5 }, // bowls
  { number: 6 }, // salats
  { number: 7 }, // hot drinks
  { number: 9 }, // cold drinks
  { number: 8 }, // teas
  { number: 10 }, // desserts
  // { number: 11 }, // add
];

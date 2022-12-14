import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ELangs, EMenuTypes } from "../enums";
import Header from "./Header";
import Menu from "./Menu";
import { GENERAL_MENU_ITEMS, LANG_MENU_ITEMS } from "../consts";
import { useLocation } from "react-router-dom";
import { closeMenus } from "../redux/slice";
import { isMenuOpenedSelector } from "../redux/selectors";
import { Block, TextBlock, TextLink, Title } from "../styles";
import { menuSearch } from "../api";
import { useAppDispatch } from "../redux/store";

const Contacts: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isMenuOpened = useSelector(isMenuOpenedSelector);
  const { i18n } = useTranslation();
  const { language } = i18n;
  const state = useSelector((s) => s);
  console.log("AAA", state);

  React.useEffect(() => {
    dispatch(closeMenus());
  }, [location, language]);

  const handleChangeLang = (lang: ELangs) => () => {
    i18n.changeLanguage(lang);
  };

  return (
    <Block>
      <Title>
        Контакты
        <img src="/title.svg" alt="Контакты" />
      </Title>
      <TextBlock>
        Foça, Barış Manço Blv. 61 A<br /> Turkey, Fethiye/Muğla
      </TextBlock>
      <TextLink target="__blank" href="https://goo.gl/maps/kzmuRydMTmQfYjTQA">
        Google Maps
      </TextLink>
      <TextLink href="whatsapp:contact=+905347908970">WhatsApp</TextLink>
      <TextLink href="mailto:lovebreakfast.cafe@gmail.com">lovebreakfast.cafe@gmail.com</TextLink>
      <TextLink href="tel:+905347908970">+90 (534) 790-89-70</TextLink>
    </Block>
  );
};

export default Contacts;

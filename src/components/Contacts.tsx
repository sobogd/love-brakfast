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

const Title = styled.h2`
  font-family: "Font Bold";
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #4a392a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 70px;
    margin-top: 20px;
  }
`;

const TextBlock = styled.p`
  text-align: center;
  margin: 0 0 15px;
`;

const TextLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  color: #772605;
`;

const Contacts: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isMenuOpened = useSelector(isMenuOpenedSelector);
  const { i18n } = useTranslation();
  const { language } = i18n;
  const state = useSelector((s) => s);
  console.log("AAA", state);

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    dispatch(closeMenus());
  }, [location, language]);

  const handleChangeLang = (lang: ELangs) => () => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
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
    </>
  );
};

export default Contacts;

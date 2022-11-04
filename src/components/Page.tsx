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

const Background = styled.section`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;
  border: 10px solid #fff;
  height: 100%;
`;

const Container = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
`;

const Scroll = styled.section`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Page: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
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
    <Background>
      <Wrapper>
        <Header />
        <Container>
          <Menu
            items={GENERAL_MENU_ITEMS}
            isOpen={isMenuOpened[EMenuTypes.GENERAL]}
            type={EMenuTypes.GENERAL}
          />
          <Menu
            items={LANG_MENU_ITEMS.map((item) => ({
              name: item.name,
              onClick: handleChangeLang(item.reduction),
            }))}
            isOpen={isMenuOpened[EMenuTypes.LANG]}
            type={EMenuTypes.LANG}
          />
          <Scroll>
            <img src="/background1.png" alt="" />
            <img src="/background1.png" alt="" />
            <img src="/background1.png" alt="" />
            <img src="/background1.png" alt="" />
            <img src="/background1.png" alt="" />
            <img src="/background1.png" alt="" />
          </Scroll>
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Page;

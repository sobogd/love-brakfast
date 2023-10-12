import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ELangs, EMenuTypes } from "../enums";
import Header from "./Header";
import Menu from "./Menu";
import { GENERAL_MENU_ITEMS, LANG_MENU_ITEMS } from "../consts";
import { useLocation } from "react-router-dom";
import { closeMenus, setPage } from "../redux/slice";
import { isMenuOpenedSelector } from "../redux/selectors";
import Contacts from "./Contacts";
import Positions from "./Positions";
import Home from "./Home";
import Reservation from "./Reservation";

enum ECornerPosition {
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
}

const Background = styled.section`
  background: #363636;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;
  height: 100%;
  background: url(/back.jpeg) repeat;
  background-size: 100%;
`;

const Container = styled.section`
  position: relative;
  height: calc(100% - 70px);
  width: 100%;
`;

const Scroll = styled.section`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ScrollContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: relative;
`;

const Corner = styled.img<{ position: ECornerPosition }>`
  position: absolute;
  ${({ position }) => {
    switch (position) {
      case ECornerPosition.TOP_LEFT:
        return `
          top: 20px;
          left: 20px;
          transform: rotate(270deg);
        `;
      case ECornerPosition.TOP_RIGHT:
        return `
          top: 20px;
          right: 20px;
        `;
      case ECornerPosition.BOTTOM_LEFT:
        return `
          bottom: 20px;
          left: 20px;
          transform: rotate(180deg);
        `;
      case ECornerPosition.BOTTOM_RIGHT:
        return `
          bottom: 20px;
          right: 20px;
          transform: rotate(90deg);
        `;
      default:
        return "";
    }
  }}
  width: 30px;
  height: 30px;
`;

const Page: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isMenuOpened = useSelector(isMenuOpenedSelector);
  const { i18n } = useTranslation();
  const { language } = i18n;
  const state: any = useSelector((s) => s);

  React.useEffect(() => {
    if (location.search.includes("?menu")) {
      i18n.changeLanguage("ru");
      dispatch(setPage("menu"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    dispatch(closeMenus());
  }, [location, language, dispatch, i18n]);

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
            {state.page === "contacts" && (
              <Fragment>
                <Corner position={ECornerPosition.TOP_LEFT} src="/corner.svg" />
                <Corner position={ECornerPosition.TOP_RIGHT} src="/corner.svg" />
                <Corner position={ECornerPosition.BOTTOM_LEFT} src="/corner.svg" />
                <Corner position={ECornerPosition.BOTTOM_RIGHT} src="/corner.svg" />
              </Fragment>
            )}
            <ScrollContainer>
              {state.page === "home" && <Home />}
              {state.page === "contacts" && <Contacts />}
              {state.page === "menu" && <Positions />}
              {/* {state.page === "reservation" && <Reservation />} */}
            </ScrollContainer>
          </Scroll>
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Page;

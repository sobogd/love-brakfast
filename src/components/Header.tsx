import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slice";
import { isMenuOpenedSelector } from "../redux/selectors";
import { EMenuTypes } from "../enums";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 70px;
  padding: 0 10px;
  margin-top: -10px;
`;

const LangMenuButton = styled.div`
  width: 40px;
  color: #7f674a;
`;

const CompanyTitle = styled.div`
  font-size: 15px;
  color: #7f674a;
  line-height: 25px;
  span {
    font-size: 25px;
    margin-right: 5px;
  }
`;

const MenuButtonContainer = styled.div<IMenuBUttonContainer>`
  width: 40px;
  height: 40px;
  position: relative;

  span {
    display: block;
    background: #d1c3b1;
    height: 1px;
    border: 0;
    position: absolute;
    width: ${(p) => (p.isOpen ? "27" : "35")}px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    :first-child {
      ${(p) =>
        p.isOpen
          ? `
            transform: rotate(45deg);
            bottom: 0px;
            left: 0;
            right: 0;
          `
          : `
            top: 20px;
        `}
    }

    :nth-child(2) {
      ${(p) =>
        p.isOpen
          ? `
            opacity: 0;
          `
          : `
            opacity: 1;
        `}
    }

    :last-child {
      ${(p) =>
        p.isOpen
          ? `
          transform: rotate(-45deg);
            bottom: 0px;
            left: 0;
            right: 0;
          `
          : `
            bottom: 20px;
        `}
    }
  }
`;

interface IMenuBUttonContainer {
  isOpen: boolean;
}

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const isMenuOpened = useSelector(isMenuOpenedSelector);

  const handleClickMenuButton = (type: EMenuTypes) => () => {
    dispatch(toggleMenu(type));
  };

  return (
    <>
      <HeaderContainer>
        <LangMenuButton onClick={handleClickMenuButton(EMenuTypes.LANG)}>{i18n.language}</LangMenuButton>
        <CompanyTitle>
          <span>{t("title.first")}</span>
          {t("title.second")}
        </CompanyTitle>
        <MenuButtonContainer
          onClick={handleClickMenuButton(EMenuTypes.GENERAL)}
          isOpen={isMenuOpened[EMenuTypes.GENERAL]}
        >
          <span />
          <span />
          <span />
        </MenuButtonContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

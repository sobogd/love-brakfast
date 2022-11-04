import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { langSelector } from "../redux/selectors";
import { MenuButton } from "./MenuButton";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 70px;
  padding: 0 10px;
`;

const LangMenuButton = styled.div`
  width: 40px;
`;

const CompanyTitle = styled.div`
  width: 8%;
`;

const Header: React.FC = () => {
  const { t } = useTranslation();
  const lang = useSelector(langSelector);

  return (
    <HeaderContainer>
      <LangMenuButton>{lang}</LangMenuButton>
      <CompanyTitle>
        <span>{t("title.first")}</span>
        {t("title.second")}
      </CompanyTitle>
      <MenuButton />
    </HeaderContainer>
  );
};

export default Header;

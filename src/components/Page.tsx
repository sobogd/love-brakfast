import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ELangs } from "../enums";
import Header from "./Header";
import Menu from "./Menu";

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
  height: calc(100vh - 90px);
  overflow-x: hidden;
  overflow-y: auto;
`;

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleChangeLang = () => {
    i18n.changeLanguage(ELangs.EN);
  };

  return (
    <Background>
      <Wrapper>
        <Header />
        <Container>
          <Menu />
          <img src="/background1.png" alt="" />
          dsfdsf
          <img src="/background1.png" alt="" />
          ds
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Page;

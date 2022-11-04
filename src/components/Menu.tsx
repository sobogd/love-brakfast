import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { langSelector } from "../redux/selectors";
import { MenuButton } from "./MenuButton";
import styled from "@emotion/styled";
import { IState } from "../interfaces";

const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 90px);
  transition: all 1200ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: ${(p) => (p.isOpen ? "1" : "0")};
  pointer-events: ${(p) => (p.isOpen ? "initial" : "none")};
  z-index: 15;
  top: 80px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  overflow: hidden;
`;

const Background = styled.div<{ isOpen: boolean }>`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(${(p) => (p.isOpen ? "1" : "1.15")});
  transition: all 1200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: -1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #242424f2;
    width: 100%;
    height: 100%;
  }
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const Element = styled.ul`
  width: calc(100% - 100px);
  margin: 0 50px;
  text-align: center;
  text-transform: uppercase;
  color: #d1c3b1;
  padding: 15px 0;
  font-size: 18px;
  letter-spacing: 2px;
  transform: translateY(85%);
  transition: all 1200ms cubic-bezier(0.19, 1, 0.22, 1), opacity 200ms linear;
  border-bottom: 1px solid #484949;
`;

const Menu: React.FC = () => {
  const dispatch = useDispatch();

  const isGeneralMenuOpen: boolean = useSelector(
    (s: IState) => s.isGeneralMenuOpen
  );

  return (
    <Container isOpen={isGeneralMenuOpen}>
      <Background isOpen={isGeneralMenuOpen}>
        <img src="/background2.jpeg" alt="" />
      </Background>
      <List>
        <Element>Menu</Element>
        <Element>About Us</Element>
        <Element>Our restaurant</Element>
        <Element>Contacts</Element>
        <Element>Reservation</Element>
      </List>
    </Container>
  );
};

export default Menu;

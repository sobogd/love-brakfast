import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { EMenuTypes } from "../enums";
import { MENU_BACKGROUNDS } from "../consts";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setPage, toggleMenu } from "../redux/slice";

const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition:
    all 1200ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: ${(p) => (p.isOpen ? "1" : "0")};
  pointer-events: ${(p) => (p.isOpen ? "initial" : "none")};
  z-index: 15;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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

  img {
    max-width: initial;
  }
`;

const List = styled.ul`
  width: 100%;
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
  padding: 0;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #484949;
`;

const Button = styled.button<{ isOpen: boolean }>`
  color: inherit;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 15px 0;
  text-transform: uppercase;
  transform: translateY(${(p) => (p.isOpen ? "0" : "85")}%);
  transition:
    all 1200ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 200ms linear;
`;

const LinkStyled = styled.a<{ isOpen: boolean }>`
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 15px 0;
  transform: translateY(${(p) => (p.isOpen ? "0" : "85")}%);
  transition:
    all 1200ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 200ms linear;
`;

interface IMenuItem {
  name: string;
  link?: string;
  onClick?: () => void;
}

interface IMenuProps {
  items: IMenuItem[];
  isOpen: boolean;
  type: EMenuTypes;
}

const Menu: React.FC<IMenuProps> = ({ items, isOpen, type }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { src, alt } = MENU_BACKGROUNDS[type];

  const handleClickBackground = () => {
    dispatch(toggleMenu(type));
  };

  return (
    <Container isOpen={isOpen}>
      <Background isOpen={isOpen} onClick={handleClickBackground}>
        <img src={src} alt={alt} />
      </Background>
      <List>
        {items.map((item) => (
          <Element>
            {!!item.link && (
              <LinkStyled
                isOpen={isOpen}
                onClick={() => dispatch(setPage(item.link))}
              >
                {t(item.name)}
              </LinkStyled>
            )}
            {!!item.onClick && (
              <Button isOpen={isOpen} onClick={item.onClick}>
                {t(item.name)}
              </Button>
            )}
          </Element>
        ))}
      </List>
    </Container>
  );
};

export default Menu;

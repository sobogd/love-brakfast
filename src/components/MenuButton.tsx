import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleGeneralMenu } from "../redux/slice";
import { IState } from "../interfaces";

interface IMenuBUttonContainer {
  isOpen: boolean;
}

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

export const MenuButton: React.FC = () => {
  const dispatch = useDispatch();

  const isGeneralMenuOpen: boolean = useSelector(
    (s: IState) => s.isGeneralMenuOpen
  );

  const handleClickMenuButton = () => {
    dispatch(toggleGeneralMenu());
  };

  return (
    <MenuButtonContainer
      onClick={handleClickMenuButton}
      isOpen={isGeneralMenuOpen}
    >
      <span />
      <span />
      <span />
    </MenuButtonContainer>
  );
};

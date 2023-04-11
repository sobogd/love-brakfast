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
import { useAppDispatch, useAppSelector } from "../redux/store";
import { t } from "i18next";

const Positions: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isMenuOpened = useSelector(isMenuOpenedSelector);
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  const categories = useAppSelector((s) => s.menu);

  React.useEffect(() => {
    dispatch(menuSearch());
  }, []);

  React.useEffect(() => {
    dispatch(closeMenus());
  }, [location, language]);

  return (<>
        {!!categories.length &&
            categories.map((m: any) => (
                <Block>
                  <Title>
                    {t(`categories.category${m.id}`)}
                    <img src="/title.svg" alt="Menu"/>
                  </Title>
                  <TextBlock>
                    <ul>
                      {!!m.positions.length &&
                          m.positions.map((p: any) =>
                              (
                                  <li>
                                    {t(`positions.position${p.id}`)}
                                    {!!p.description && <text>{p.description}</text>}
                                    <strong>{p.price} TL</strong>
                                  </li>
                              )
                          )}
                    </ul>
                  </TextBlock>
                </Block>
            ))}
    </>);
};

export default Positions;

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
import { useAppDispatch } from "../redux/store";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Reservation: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
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
    <Block>
      <Title>
        Бронирование
        <img src="/title.svg" alt="Бронирование" />
      </Title>
      <FormControl fullWidth style={{ marginTop: 20 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Age"
          placeholder="4343535"
          onChange={(e) => console.log(e)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Block>
  );
};

export default Reservation;

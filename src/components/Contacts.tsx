import React from "react";
import { useTranslation } from "react-i18next";
import { Block, TextBlock, TextLink, Title } from "../styles";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Block>
      <Title>
        {t("pages.contacts.title")}
        <img src="/title.svg" alt={t("pages.contacts.title")} />
      </Title>
      <TextBlock>
        Foça, Barış Manço Blv. 61 A<br /> Turkey, Fethiye/Muğla
      </TextBlock>
      <TextLink target="__blank" href="https://goo.gl/maps/kzmuRydMTmQfYjTQA">
        Google Maps
      </TextLink>
      <TextLink href="mailto:lovebreakfast.cafe@gmail.com">lovebreakfast.cafe@gmail.com</TextLink>
      <TextLink href="tel:+905347908970">+90 (534) 790-89-70</TextLink>
    </Block>
  );
};

export default Contacts;

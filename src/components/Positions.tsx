import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { categories, positions } from "../consts";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
  align-items: flex-start;
  * {
    transition: none;
  }
`;

const MenuTabs = styled.div`
  width: 100%;
  position: relative;
`;

const MenuTabsScrollable = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 16px 16px 16px 0;
  display: flex;
  flex-wrap: nowrap;
`;

const MenuTab = styled.span`
  background: #ffffff8c;
  margin-left: 16px;
  padding: 16px;
  box-sizing: border-box;
  white-space: nowrap;
  transition: 0.3s;
`;

const PositionsContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  min-height: 100%;
  padding-bottom: 150px;
`;

const SwiperCardNumber = styled.div`
  top: 0;
  left: 0;
  width: 80px;
  background: #ffffffd1;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: "№";
  }
`;

const SwiperCardName = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 14px;
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  line-height: 22px;
`;

const SwiperCardPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 2px 0 15px;
`;

const SwiperCardButton = styled.div`
  background: #d7ccbd;
  color: white;
  padding: 8px 30px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 6px;
  :hover {
    background: #c3b5a2;
  }
`;

const SwiperCardDescription = styled.div`
  font-size: 14px;
  padding: 0 20px 10px;
  color: #797979;
  width: 100%;
  text-align: center;
  margin-top: -4px;
  line-height: 18px;
  white-space: pre-wrap;
`;

const SwiperCardSwipeDescription = styled.div`
  font-size: 10px;
  text-align: center;
  margin: -2px 0 10px;
  color: gray;
`;

const SwiperCardImage = styled.img``;

const Positions: React.FC = () => {
  const { t } = useTranslation();

  const [categoryId, setCategoryId] = useState<number | undefined>(1);

  const handleClickCategory = (categoryId: number) => () => {
    setCategoryId(categoryId);
    document.getElementById("tabsForPositions")?.scrollTo({
      left: (document.getElementById("tabForCategory" + categoryId.toString())?.offsetLeft ?? 0) - 80,
    });
    document.getElementById("tabForPositions")?.scrollTo({
      top: 0,
    });
  };

  const getCardsForArray = (array: any) => {
    return array.map((b: any) => (
      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          // cardsEffect={{ perSlideRotate: 10 }}
          style={{
            width: "94%",
            padding: "3%",
          }}
        >
          {b.map((a: any) => (
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
              }}
            >
              <SwiperCardImage src={a.img} />
              <SwiperCardNumber
                style={{
                  position: a.img !== "" ? "absolute" : "relative",
                  height: a.img !== "" ? "50px" : "auto",
                  marginTop: a.img !== "" ? "0px" : "8px",
                  color: a.img !== "" ? "black" : "gray",
                  fontSize: a.img !== "" ? "22px" : "15px",
                }}
              >
                {a.number}
              </SwiperCardNumber>
              <SwiperCardName>{t(`menuPositions.name${a.number}`)}</SwiperCardName>
              {a.descr === true && (
                <SwiperCardDescription>{t(`menuPositions.description${a.number}`)}</SwiperCardDescription>
              )}
              {/* <SwiperCardButton>Add to order</SwiperCardButton> */}
              <SwiperCardPrice>{a.price} TL</SwiperCardPrice>
            </SwiperSlide>
          ))}
        </Swiper>
        {b.length > 1 && (
          <SwiperCardSwipeDescription>Пролистайте, чтобы выбрать варианты блюда</SwiperCardSwipeDescription>
        )}
      </>
    ));
  };

  return (
    <div>
      <Container
        style={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <MenuTabs>
          <MenuTabsScrollable id="tabsForPositions">
            {categories.map((c) => (
              <MenuTab
                onClick={handleClickCategory(c.number)}
                style={
                  c.number === categoryId
                    ? { background: "rgb(209 195 177 / 82%)", color: "white" }
                    : undefined
                }
                id={`tabForCategory${c.number}`}
              >
                {t(`menuCategories.name${c.number}`)}
              </MenuTab>
            ))}
          </MenuTabsScrollable>
        </MenuTabs>
        <PositionsContainer id="tabForPositions">
          {getCardsForArray(positions.filter((p) => p?.[0].category === categoryId))}
        </PositionsContainer>
      </Container>
    </div>
  );
};

export default Positions;

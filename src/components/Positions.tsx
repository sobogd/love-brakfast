import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
  align-items: flex-start;
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
  padding: 20px 15px;
  overflow-y: scroll;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
`;

const PositionCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;
  width: 100%;
`;

const PositionNumber = styled.div`
  background: #ffffff8c;
  border-radius: 30px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-weight: 600;
  ::before {
    content: "#";
    font-size: 10px;
    margin-right: 2px;
  }
`;

const PositionName = styled.div`
  margin: 0 20px;
  text-align: center;
  flex-grow: 1;
  width: 100%;
  p {
    margin-top: 5px;
    font-size: 12px;
    color: #656565;
  }
`;

const PositionPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  ::after {
    content: "₺";
    font-size: 14px;
    margin-left: 2px;
  }
`;

const Positions: React.FC = () => {
  const { t } = useTranslation();
  // const location = useLocation();
  // const dispatch = useAppDispatch();
  // const isMenuOpened = useSelector(isMenuOpenedSelector);
  // const { language } = i18n;
  // const menu = useAppSelector((s) => s.menu);

  const [categoryId, setCategoryId] = useState<number | undefined>(1);

  // React.useEffect(() => {
  //   dispatch(menuSearch());
  // }, []);

  // React.useEffect(() => {
  //   dispatch(closeMenus());
  // }, [location, language]);

  // const categories: { id: number; name: string }[] = useMemo(() => {
  //   return (
  //     menu?.map((category) => ({
  //       id: category?.id || 0,
  //       name: category?.name || "",
  //     })) || []
  //   );
  // }, [menu]);

  // const positions: { id: number; name: string; price: number }[] = useMemo(() => {
  //   if (!categoryId || !menu) return [];
  //   return (
  //     menu
  //       ?.find((c) => c.id === categoryId)
  //       ?.items?.map((p) => ({
  //         id: p.id || 0,
  //         name: p?.t?.find((tr) => tr.code === i18n.language)?.title || p.name || "",
  //         price: p.price ?? 0,
  //       })) || []
  //   );
  // }, [menu, categoryId, i18n.language]);

  // useEffect(() => {
  //   setCategoryId(categories?.[0]?.id);
  // }, [categories]);

  const handleClickCategory = (categoryId: number) => () => {
    setCategoryId(categoryId);
    document.getElementById("tabsForPositions")?.scrollTo({
      left: (document.getElementById("tabForCategory" + categoryId.toString())?.offsetLeft ?? 0) - 80,
    });
  };

  const positions = [
    // breakfast
    { number: 1, price: 155, descr: true, category: 1 },
    { number: 2, price: 205, descr: true, category: 1 },
    { number: 3, price: 80, descr: true, category: 1 },
    { number: 4, price: 80, descr: true, category: 1 },
    { number: 5, price: 80, descr: true, category: 1 },
    { number: 6, price: 95, descr: true, category: 1 },
    { number: 7, price: 155, descr: false, category: 1 },
    { number: 8, price: 135, descr: false, category: 1 },
    { number: 9, price: 135, descr: false, category: 1 },
    { number: 10, price: 110, descr: true, category: 1 },
    { number: 11, price: 110, descr: true, category: 1 },
    { number: 12, price: 110, descr: true, category: 1 },
    { number: 13, price: 110, descr: true, category: 1 },
    { number: 14, price: 110, descr: true, category: 1 },
    { number: 15, price: 110, descr: true, category: 1 },
    { number: 16, price: 165, descr: true, category: 1 },
    { number: 17, price: 165, descr: true, category: 1 },
    { number: 18, price: 165, descr: true, category: 1 },
    // toasts
    { number: 19, price: 195, descr: false, category: 2 },
    { number: 20, price: 125, descr: false, category: 2 },
    { number: 21, price: 25, descr: true, category: 2 },
    // soups
    { number: 22, price: 95, descr: false, category: 3 },
    { number: 23, price: 95, descr: false, category: 3 },
    // sandviches
    { number: 24, price: 165, descr: false, category: 4 },
    { number: 25, price: 165, descr: false, category: 4 },
    { number: 26, price: 145, descr: false, category: 4 },
    // bowls
    { number: 27, price: 220, descr: true, category: 5 },
    { number: 28, price: 220, descr: true, category: 5 },
    { number: 29, price: 185, descr: true, category: 5 },
    { number: 30, price: 165, descr: true, category: 5 },
    // salats
    { number: 31, price: 95, descr: true, category: 6 },
    { number: 32, price: 165, descr: true, category: 6 },
    // hot drinks
    { number: 33, price: 55, descr: false, category: 7 },
    { number: 34, price: 70, descr: false, category: 7 },
    { number: 35, price: 40, descr: false, category: 7 },
    { number: 36, price: 60, descr: false, category: 7 },
    { number: 37, price: 50, descr: false, category: 7 },
    { number: 38, price: 70, descr: false, category: 7 },
    { number: 39, price: 65, descr: false, category: 7 },
    { number: 40, price: 85, descr: false, category: 7 },
    { number: 41, price: 85, descr: false, category: 7 },
    { number: 42, price: 65, descr: false, category: 7 },
    { number: 43, price: 70, descr: false, category: 7 },
    { number: 44, price: 55, descr: false, category: 7 },
    { number: 45, price: 30, descr: false, category: 7 },
    // teas
    { number: 46, price: 120, descr: true, category: 8 },
    { number: 47, price: 60, descr: true, category: 8 },
    { number: 48, price: 60, descr: true, category: 8 },
    { number: 49, price: 100, descr: true, category: 8 },
    { number: 50, price: 100, descr: true, category: 8 },
    { number: 51, price: 100, descr: true, category: 8 },
    // cold drinks
    { number: 52, price: 70, descr: false, category: 9 },
    { number: 53, price: 55, descr: false, category: 9 },
    { number: 54, price: 70, descr: false, category: 9 },
    { number: 55, price: 75, descr: false, category: 9 },
    { number: 56, price: 75, descr: false, category: 9 },
    { number: 57, price: 105, descr: false, category: 9 },
    { number: 58, price: 95, descr: false, category: 9 },
    { number: 59, price: 85, descr: false, category: 9 },
    { number: 60, price: 85, descr: false, category: 9 },
    { number: 61, price: 85, descr: false, category: 9 },
    { number: 62, price: 85, descr: false, category: 9 },
    { number: 63, price: 35, descr: false, category: 9 },
    { number: 64, price: 35, descr: false, category: 9 },
    { number: 65, price: 50, descr: false, category: 9 },
    { number: 66, price: 35, descr: false, category: 9 },
    { number: 67, price: 50, descr: false, category: 9 },
    // desserts
    { number: 68, price: 105, descr: false, category: 10 },
    { number: 69, price: 105, descr: false, category: 10 },
    { number: 70, price: 60, descr: false, category: 10 },
    { number: 71, price: 60, descr: false, category: 10 },
    { number: 72, price: 105, descr: false, category: 10 },
  ];

  const categories = [
    { number: 1 }, // breakfast
    { number: 2 }, // toasts
    { number: 3 }, // soups
    { number: 4 }, // sandviches
    { number: 5 }, // bowls
    { number: 6 }, // salats
    { number: 7 }, // hot drinks
    { number: 8 }, // teas
    { number: 9 }, // cold drinks
    { number: 10 }, // desserts
  ];

  const getCardsForArray = (array: any) => {
    return array.map((a: any) => (
      <PositionCard>
        <PositionNumber>{a.number}</PositionNumber>
        <PositionName>
          <span>{t(`menuPositions.name${a.number}`)}</span>
          {a.descr && <p>{t(`menuPositions.description${a.number}`)}</p>}
        </PositionName>
        <PositionPrice>{a.price}</PositionPrice>
      </PositionCard>
    ));
  };

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: any) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 80) {
      if (categoryId && categoryId < 10) {
        setCategoryId(categoryId + 1);
        document.getElementById("tabsForPositions")?.scrollTo({
          left:
            (document.getElementById("tabForCategory" + (categoryId + 1).toString())?.offsetLeft ?? 0) - 80,
        });
      }
    }

    if (touchStart - touchEnd < -80) {
      if (categoryId && categoryId > 1) {
        setCategoryId(categoryId - 1);
        document.getElementById("tabsForPositions")?.scrollTo({
          left:
            (document.getElementById("tabForCategory" + (categoryId - 1).toString())?.offsetLeft ?? 0) - 80,
        });
      }
    }
  }

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
        <PositionsContainer
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getCardsForArray(positions.filter((p) => p.category === categoryId))}
        </PositionsContainer>
        {/* {positions?.map((p) => <div>{p.name}</div>)} */}
        {/*{!!categories.length &&*/}
        {/*    categories.map((m: any) => (*/}
        {/*        <Block>*/}
        {/*          <Title>*/}
        {/*            {t(`categories.category${m.id}`)}*/}
        {/*            <img src="/title.svg" alt="Menu"/>*/}
        {/*          </Title>*/}
        {/*          <TextBlock>*/}
        {/*            <ul>*/}
        {/*              {!!m.positions.length &&*/}
        {/*                  m.positions.map((p: any) =>*/}
        {/*                      (*/}
        {/*                          <li>*/}
        {/*                            {t(`positions.position${p.id}`)}*/}
        {/*                            {!!p.description && <text>{p.description}</text>}*/}
        {/*                            <strong>{p.price} TL</strong>*/}
        {/*                          </li>*/}
        {/*                      )*/}
        {/*                  )}*/}
        {/*            </ul>*/}
        {/*          </TextBlock>*/}
        {/*        </Block>*/}
        {/*    ))}*/}
      </Container>
    </div>
  );
};

export default Positions;

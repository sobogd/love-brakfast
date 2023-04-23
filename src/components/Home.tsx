import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Slider = styled.div`
  float: left;
  width: calc(100% + 80px);
  margin: -40px;
  height: calc(100% + 80px);
  position: absolute;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    display: flex;
    height: 100%;
    li {
      position: relative;
      img {
        min-height: 100%;
        max-width: initial;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        color: #e9e9e9;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px 40px;
        bottom: calc(10% - 75px);
        width: 100%;
        height: 150px;
        text-shadow: 1px 1px 1px #666666;
        font-size: 18px;
      }
    }
  }
`;

const Control = styled.span<{ side: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ side }) => (side === "left" ? "transform: rotate(180deg);left: 0;" : "right: 0;")};
  margin: auto;
  z-index: 5;
  width: 50px;
  height: 150px;
  :hover {
    ::before {
      border-color: #ffffffbf;
    }
  }
  ::before {
    content: "";
    width: 35px;
    height: 35px;
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: -10px;
    border: 2.5px solid #ffffffbf;
    border-bottom: 0;
    border-right: 0;
    transform: rotate(135deg);
    margin: auto;
  }
`;

const Home: React.FC = () => {
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  const [width, setWidth] = React.useState(0);
  const [leftPosition, setLeftPosition] = React.useState(0);

  const sliderBlock = React.useRef(null);

  React.useEffect(() => {
    if (sliderBlock && sliderBlock.current) {
      const block: any = sliderBlock.current;
      setWidth(block.getBoundingClientRect().width);
      setLeftPosition(block.getBoundingClientRect().width * -1);
    }
  }, [sliderBlock]);

  const slides = React.useMemo(() => {
    return [
      {
        src: "/slider/slider3.jpg",
        title: t("slider.slider1"),
        description: "",
      },
      {
        src: "/slider/slider9.jpg",
        title: t("slider.slider9"),
        description: "",
      },
      {
        src: "/slider/slider7.jpg",
        title: t("slider.slider7"),
        description: "",
      },
      {
        src: "/slider/slider2.jpg",
        title: t("slider.slider2"),
        description: "",
      },
      {
        src: "/slider/slider6.jpg",
        title: t("slider.slider6"),
        description: "",
      },
      {
        src: "/slider/slider5.jpg",
        title: t("slider.slider5"),
        description: "",
      },
    ];
  }, [language]);

  const allWidth = slides.length * width;
  const activeSlideNumber = (Math.abs(leftPosition) * slides.length) / allWidth;

  return (
    <Slider ref={sliderBlock} style={{}}>
      {activeSlideNumber > 0 && <Control side="left" onClick={() => setLeftPosition(leftPosition + width)} />}
      <ul
        style={{
          left: leftPosition,
          width: allWidth,
          overflow: "hidden",
          minWidth: `calc(100vw * ${slides.length})`,
        }}
      >
        {slides.map((s) => (
          <li style={{ width, display: !width ? "none" : "block" }}>
            <img src={s.src} alt="" />
            <span>{s.title}</span>
          </li>
        ))}
      </ul>
      {activeSlideNumber < slides.length - 1 && (
        <Control side="right" onClick={() => setLeftPosition(leftPosition - width)} />
      )}
    </Slider>
  );
};

export default Home;

import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-color: #a7c4f2;
  padding: 40px 20px;
  text-align: center;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -180px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin: 180px 0 30px;
`;

const CardsContainer = styled.div`
  position: relative;
  width: 320px;
  height: 340px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
    display: flex;
    gap: 16px;
    justify-content: center;
  }
`;

const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "index" && prop !== "activeIndex",
})`
  position: absolute;
  width: 290px;
  height: 320px;
  border-radius: 20px;
  overflow: visible;
  background-color: transparent;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transition: transform 0.5s ease, opacity 0.5s ease;
  cursor: pointer;
  opacity: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  ${({ index, activeIndex }) => {
    const pos = (index - activeIndex + 3) % 3;
    const base = {
      0: { x: 0, s: 1, o: 1, z: 10 },
      1: { x: 40, s: 0.85, o: 0.6, z: 5 },
      2: { x: 80, s: 0.75, o: 0.3, z: 1 },
    }[pos];
    return css`
      opacity: ${base.o};
      transform: translate(-50%, -50%) translateX(${base.x}px) scale(${base.s});
      z-index: ${base.z};
    `;
  }}

  @media (min-width: 768px) {
    position: static;
    transform: none !important;
    opacity: 1 !important;
    cursor: pointer;
    box-shadow: none;
    overflow: hidden;
    z-index: 1 !important;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);

      img {
        transform: scale(1.05);
      }

      div[data-hoverblock] {
        transform: scale(1.05);
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  border-radius: 15px;
  transition: transform 0.3s ease;
`;

const BottomBlock = styled.div.attrs(() => ({
  "data-hoverblock": true,
}))`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: -30px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 5;
  transition: transform 0.3s ease;
`;

const Icon = styled.div`
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0 2px;
  font-weight: 700;
  color: #222;
`;

const Duration = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

const ButtonNext = styled.button`
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
  background: #3b3fda;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 20;

  &:hover {
    background: #2a2e9d;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Dots = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background: ${({ $active }) => ($active ? "#3b3fda" : "#bbb")};
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const servicesData = [
  {
    image:
      "https://news.transinfo.by/uploads/posts/2021-04/1617973332_man-tgx-2020-1.jpg",
    icon: "🚛",
    title: "ГРУЗОВЫЕ ПЕРЕВОЗКИ",
    duration: "от 15 до 20 дней",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-B1v6OOe9TbldnvAbX6QBBk7VDkKvMjkOQ&s",
    icon: "✈️",
    title: "АВИА ПЕРЕВОЗКИ",
    duration: "от 7 до 10 дней",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjzSic0udWMRbcuFd71RdAR1fro3zZbmsqQ&s",
    icon: "🚆",
    title: "ЖЕЛЕЗНО-ДОРОЖНЫЕ ПЕРЕВОЗКИ",
    duration: "от 15 до 20 дней",
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % servicesData.length);

  return (
    
    <Wrapper>
      <Title>Наши услуги</Title>
        <CardsContainer>
        {servicesData.map((item, idx) => (
          <Card key={idx} index={idx} activeIndex={activeIndex}>
            <Image src={item.image} alt={item.title} />
            <BottomBlock>
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <Duration>{item.duration}</Duration>
            </BottomBlock>
          </Card>
        ))}
        <ButtonNext onClick={nextSlide}>→</ButtonNext>
      </CardsContainer>

      <Dots>
        {servicesData.map((_, idx) => (
          <Dot
            key={idx}
            $active={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </Dots>
    </Wrapper>
  );
}

export default Services;

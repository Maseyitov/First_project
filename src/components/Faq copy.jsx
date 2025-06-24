import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  position: fixed;
  top: 20px;
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const Line1 = styled.div`
  height: 4px;
  width: 420px;
  background-color: #0c2aec;
  border-radius: 2px;
  margin-bottom: 6px;
`;

const Line2 = styled.div`
  height: 4px;
  width: 360px;
  background-color: #279ec9;
  border-radius: 2px;
  margin-bottom: 6px;
`;

const Line3 = styled.div`
  height: 4px;
  width: 300px;
  background-color: #170cdf;
  border-radius: 2px;
`;

const HamburgerLines = () => (
  <HamburgerWrapper>
    <Line1 />
    <Line2 />
    <Line3 />
  </HamburgerWrapper>
);

const Wrapper = styled.div`
  max-width: 850px;
  width: 100%;
  margin: 60px auto;
  padding: 40px 30px;
  font-family: sans-serif;

  @media (max-width: 768px) {
    margin: 30px 10px;
    padding: 20px 15px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const Item = styled.div`
  border-top: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Question = styled.div`
  padding: 20px 15px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #fdfdfd;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 16px 12px;
  }
`;

const Answer = styled.div`
  width: 100%;      
  box-sizing: border-box;
  max-height: ${({ open }) => (open ? '600px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  padding: ${({ open }) => (open ? '18px 15px' : '0 15px')};
  font-size: 17px;
  color: #2553c5;
  background-color: #fafafa;
  line-height: 1.6;
  border: 1px solid #698bdf;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: ${({ open }) => (open ? '14px 12px' : '0 12px')};
  }
`;

const Arrow = styled.span`
  font-size: 18px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0)')};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const data = [
  {
    question: 'Как оплатить заказ?',
    answer: 'Вы можете оплатить заказ онлайн или при получении. Способы оплаты уточняйте у менеджера.',
  },
  {
    question: 'Маршруты, стоимость и сроки доставки',
    answer:
      'Чтобы назвать вам тариф на доставку, мы должны знать вес и объем груза. Если не знаете — не страшно. Мы свяжемся с поставщиком и запросим их у него.',
  },
  {
    question: 'Сколько стоят наши услуги?',
    answer: 'Обычно клиенты работают с нами под ключ: поиск поставщика, выкуп и доставка.',
  },
  {
    question: 'Что такое опасные грузы?',
    answer:
      'Опасный груз — это категория отправлений, которые в результате транспортировки могут нанести вред здоровью или жизни людей и/или окружающей среде. Для отправки таких грузов требуется оформление, упаковка и наличие специализированной упаковки. Для получения консультации оформления отправки опасного груза необходимо обратиться к сотруднику call-центра или вашему персональному менеджеру.',
  },
  {
    question: 'Какие виды транспорта используются для доставки?',
    answer:
      'Для доставки товаров используются различные виды транспорта, включая автомобильный, железнодорожный, морской и авиационный.',
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <HamburgerLines />
      <Wrapper>
        <Title>Популярные вопросы</Title>
        {data.map((item, index) => (
          <Item key={index}>
            <Question onClick={() => toggle(index)}>
              {item.question}
              <Arrow open={openIndexes.includes(index)}>▶</Arrow>
            </Question>
            <Answer open={openIndexes.includes(index)}>{item.answer}</Answer>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};

export default FAQ;
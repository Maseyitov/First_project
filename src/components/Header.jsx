import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillTelephoneFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import logo from '../assets/images/Group.png'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.header`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  flex-wrap: nowrap;
  position: relative;

  @media (max-width: 660px) {
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
  }
`

const LoginContener = styled.div`
  width: 200px;

  img {
    max-width: 100px;
    height: auto;
  }
`

const NavigateContainer = styled.nav`
  width: 650px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    margin: 0 5px;
    font-size: 16px;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  a {
    margin: 0 5px;
    font-size: 16px;
    white-space: nowrap;
    text-decoration: none;
    color: black;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (max-width: 660px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  a, p {
    margin: 10px 0;
    font-size: 16px;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const IconTelefon = styled(BsFillTelephoneFill)`
  margin-right: 5px;
`

const BurgerMenu = styled(GiHamburgerMenu)`
  font-size: 28px;
  cursor: pointer;
  display: none;

  @media (max-width: 660px) {
    display: block;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderStyled>
      <LoginContener>
        <img src={logo} alt="Логотип" />
      </LoginContener>

      <NavigateContainer>
        <Link to="/">Главная</Link>
        <Link to="/about">О компании</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacts">Контакты</Link>
        <p><IconTelefon /> +996 500 625 585</p>
      </NavigateContainer>

      <BurgerMenu onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <MobileMenu>
          <Link to="/" onClick={() => setIsOpen(false)}>Главная</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>О компании</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Услуги</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/contacts" onClick={() => setIsOpen(false)}>Контакты</Link>
          <p><IconTelefon /> +996 500 625 585</p>
        </MobileMenu>
      )}
    </HeaderStyled>
  )
}

export default Header

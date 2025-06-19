import React from 'react'
import styled from 'styled-components'
import ContactsInformation from './ContactsInformation'
import logo from '../assets/icons/Group1.png'
import { IoLogoWhatsapp } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { MdFacebook } from "react-icons/md"

const FooterStyled = styled.footer`
  width: 100%;
  height: 579px;
  background-color: #3464d4b1;
  padding: 20px 0;

   @media (max-width: 660px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1090px) {
    height: 850px;
  }
`;

const TextContainer = styled.div`
  width: 794px;
  height: 88px;
  margin: 0 auto;
  color: #FFFFFF;

  @media (max-width: 660px) {
    width: 400px;
    height: 150px;
  }
`

const CompanyInformation = styled.div`
  width: 100%;
  min-height: 490px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  @media (max-width: 1090px) {
    margin: 10px 0px;
  }
`;

const LoginContainer = styled.div`
  width: 200px;
  height: 80px;
  margin-top: -220px;

  @media (max-width: 660px) {
  
    margin-top: -100px;
  }
`;

const LocationMapContainer = styled.div`
  width: 571px;
  height: 373px;
  border-radius: 20px;
  background-color: #000000;

  @media (max-width: 660px) {
    margin: 100px 0px;
    width: 400px;
    height: 257px;
   
  }
`;

const ContenerBox = styled.div`
  width: 138px;
  height: 44px;
  margin: -110px 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 660px) {
    width: 150px;
    height: 70px;
    justify-content: space-between;
  }

   @media (max-width: 1090px) {
    margin: -50px 210px;
  }
`;

const LogoImage = styled.img`
  width: 170px;
  height: 70px;

  @media (max-width: 660px) {
    display: none;
  }
`
const WhatsAppContener = styled(IoLogoWhatsapp)`
  font-size: 35px;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
  }
`

const InstagramContener = styled(FaInstagram)`
  font-size: 35px;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
  }
`

const FacebookContener = styled(MdFacebook)`
  font-size: 35px;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
  }
`
const InfoWrapper = styled.div`
  order: 1;

  @media (max-width: 660px) {
    order: 2;
  }
`

const MapWrapper = styled.div`
  order: 2;

  @media (max-width: 660px) {
    order: 1;
  }
`





const Footer = () => {
  return (
    <FooterStyled>
      <TextContainer>
        <h1>Приезжайте к нам в офис, и мы поможем определиться с выбором</h1>
      </TextContainer>
      <CompanyInformation>
        <LoginContainer>
           <LogoImage src={logo} alt="Логотип" />
        </LoginContainer>
        <MapWrapper>
          <LocationMapContainer as="div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.316716264215!2d74.60204701544543!3d42.87462007915579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d27c26f7c7%3A0x3edb90e5e44c55dc!2z0JrRgNC40YHQv9C10LrRgiDQn9C10YDQtdC00LjQvdCwINCY0LLQtdGA0YHQuNGC0LXRgiDQmtC40YHRjNC60LAg0JrRgNCw0LvQuNC90LDRjyDQvNC10YDQtdC00LjQvdCw!5e0!3m2!1sru!2skg!4v1718373514733!5m2!1sru!2skg"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение офиса"
           ></iframe>
          </LocationMapContainer>
        </MapWrapper>
        <InfoWrapper>
           <ContactsInformation/>
        </InfoWrapper>
      </CompanyInformation>
       <ContenerBox>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
         <WhatsAppContener />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
         <InstagramContener />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
         <FacebookContener />
          </a>
       </ContenerBox>
    </FooterStyled>
  )
}

export default Footer

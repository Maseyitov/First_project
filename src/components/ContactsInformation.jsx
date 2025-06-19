import React from 'react'
import styled from 'styled-components'

const ContactsInformationContainer = styled.div`
  width: 334px;
  height: 303px;
  margin-top: -67px;
`
const Cantainer1 = styled.div`
    width: 331px;
    height: 30px;
    color: #FFFFFF;

    > p {
        margin: -5px 0px;
        text-align: left;
        font-size: 20px ;
    }
`
const Cantainer2 = styled.div`
    width: 184px;
    height: 44px;
    margin-top: 10px;
    color: #FFFFFF;


    > p {
        margin: -5px 0px;
        text-align: left;
        font-size: 20px ;
    }
`
const Cantainer3 = styled.div`
    width: 334px;
    height: 44px;
    margin-top: 25px;
    color: #FFFFFF;

    > p {
        margin: -5px 0px;
        text-align: left;
        font-size: 20px ;
    }
`
const Cantainer4 = styled.div`
    width: 177px;
    height: 44px;
    margin-top: 24px;
    color: #FFFFFF;

    > p {
        margin: -5px 0px;
        text-align: left;
        font-size: 20px ;
    }

`
const Cantainer5 = styled.div`
    width: 236px;
    height: 44px;
    margin-top: 25px;
    color: #FFFFFF;

    > p {
        margin: -5px 0px;
        text-align: left;
        font-size: 20px ;
    }
   
`

const ContactsInformation = () => {
  return (
    <>
   <ContactsInformationContainer>
     <Cantainer1>
        <p>Контакная инфарматция</p>
     </Cantainer1>
     <Cantainer2>
        <p>Время Работы:</p>
        <p>Пн - пт 08:00 - 20:00</p>
     </Cantainer2>
     <Cantainer3>
        <p>Адрес:</p>
        <p>г.Бишкек, ул.Абдрахманова, д. 86</p>
     </Cantainer3>
     <Cantainer4>
        <p>Телефон:</p>
        <p>+996 708-11-26-01</p>
     </Cantainer4>
     <Cantainer5>
        <p>Emeil:</p>
        <p>tranzit_cargo@gmail.com</p>
     </Cantainer5>
     </ContactsInformationContainer>

   
    </>
    
  )
}

export default ContactsInformation

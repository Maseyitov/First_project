import React from 'react'
import MainLayouts from '../layouts/MainLayouts'
import { Route, Routes } from 'react-router-dom'
import AboutPages from '../pages/AboutPages'
import MainPages from '../pages/MainPages'
import ServicesPages from '../pages/ServicesPages'
import FAQPages from '../pages/FAQPages'
import ContactsPages from '../pages/ContactsPages'

const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/" element={<MainPages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/services" element={<ServicesPages />} />
          <Route path="/faq" element={<FAQPages />} />
          <Route path="/contacts" element={<ContactsPages />} />
        </Route>
      </Routes>
  )
}

export default MainRoutes

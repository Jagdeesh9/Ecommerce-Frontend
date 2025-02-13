import React from 'react'
import Header from './custom_components/Header'
import Footer from './custom_components/Footer'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

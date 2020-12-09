import React from 'react'
import Content from './Components/Content'
import Content2 from './Components/Content2'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Menu from './Components/Menu'

export default function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      {/* <Content/> */}
      <Content2/>
      <Footer/>
    </div>
  )
}

import React from 'react'
import Header from './Header'
import Studentcrd from './Studentcrd'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Studentcrd name="aditya" age={20} course="react" />
      <Studentcrd name="akash" age={19} course="react" />
      <Footer />
    </div>
  )
}

export default App

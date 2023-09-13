import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MainPage from '../Components/MainPage'
import SchoolList from '../Components/SchoolList'

const HomePage = () => {
  return (
    <div>
      {/* <SchoolList /> */}
      {/* Header */}
      <Header />
      
      <div className='flex flex-col gap-5 px-8 py-2 mt-8 md:px-40'>
        {/* MainPage */}
        <MainPage />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
import { Herosection } from '@/components/Herosection'
import Services from '@/components/Services'
import Steps from '@/components/Steps'
import Tabsection from '@/components/Tabsection'
import Tech from '@/components/Tech'
import React from 'react'

const Home = () => {
  return (
    <>
      <Herosection />
      <Tabsection />
      <Tech />
      <Services />
      <Steps/>
    </>      
  )
}

export default Home

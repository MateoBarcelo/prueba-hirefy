import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryList from './components/CategoryList'
import { SideFooter } from './components/sidebar/SideFooter'
import SideHeader from './components/sidebar/SideHeader'
import SidebarItems from './components/sidebar/SidebarItems'

function App() {

  return (
      <section className='w-[281px] h-screen bg-[#0D5287] rounded-tr-3xl rounded-br-3xl'>
        <SideHeader />
        <SidebarItems />
        <SideFooter />
      </section>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CategoryList({ category }) {
  return <>
    {category.descendants !== undefined
      ? (<details className='w-full mx-6'>
          <summary className='flex justify-between w-full py-1'>
            <div className='flex justify-center items-center space-x-4'>
              <p className='[font-size:16px] text-[#2B3445]'>{category.name}</p>
            </div>
            <div className='arrow'></div>
          </summary>
 
          {category.descendants && (
            <ul className='border-l-2 space-y-2'>
              {category.descendants.map((descendant, index) => (
                <CategoryList key={index} category={descendant} />
              ))}
            </ul>
          )}
      </details>)
      :
      (<li className='flex px-6 py-1'>
        <div className='flex justify-center items-center space-x-4'>
          <p className='[font-size:16px] text-[#2B3445]'>{category.name}</p>
        </div>
      </li>)
      }
      </>
}
function App() {

  const [count, setCount] = useState(0)

  const categories = {
    name:"Categories",
    descendants: [
      {
        name: "Lorem Ipsum"
      },
      {
        name: "Lorem Ipsum",
        descendants: [
          {
            name: "Frontend Development"
          },
          {
            name: "Backend Development"
          },
          {
            name: "Fullstack"
          }
        ]
      },
      {
        name: "Lorem Ipsum"
      },
      {
        name: "Lorem Ipsum"
      },
      {
        name: "Lorem Ipsum",
        descendants: [
          {
            name: "Frontend Development"
          },
          {
            name: "Backend Development"
          },
          {
            name: "Fullstack"
          }
        ]
      },
    ]
}

  return (
    <>
      <section className='w-[281px] h-screen bg-[#0D5287] rounded-tr-3xl rounded-br-3xl'>

        <header className='w-full h-auto flex justify-between items-center px-6 py-6'>
          <div className='flex justify-center items-center'>
            <img src="/logo.png" className='size-8 mx-2' alt="Hirefy Logo" />
            <p className='font-bold text-2xl text-white '>Hirefy</p>
          </div>
          <button className='text-2xl text-white'>
            <img src="/close.png" alt="" />
          </button>
        </header>

        <div className='h-screen flex flex-col bg-white px-4 pt-6'>
          <ul className='space-y-4'>

            <li className='flex px-6'>
              <div className='flex justify-center items-center space-x-4'>
                <img src="/home.png" className='h-4' alt="Hirefy Logo" />
                <p className='font-semibold text-lg text-[#2B3445]'>Home</p>
              </div>
            </li>

            <li className='flex px-6'>
              <div className='flex justify-center items-center space-x-4'>
                <img src="/question_mark.png" className='h-4' alt="Hirefy Logo" />
                <p className='font-semibold text-lg text-[#2B3445]'>How it works</p>
              </div>
            </li>

            <li className='flex px-6'>
              <div className='flex justify-center items-center space-x-4'>
                <img src="/hireme.png" className='h-4' alt="Hirefy Logo" />
                <p className='font-semibold text-lg text-[#2B3445]'>Marketplace</p>
              </div>
            </li>

            <li className='flex px-6'>
              <div className='flex justify-center items-center space-x-4'>
                  <img src="/applicant.png" className='h-5' alt="Hirefy Logo" />
                  <p className='font-semibold text-lg text-[#2B3445]'>For Talents</p>
              </div>
            </li>

            <li className='flex px-6 flex-col'>
            
              <details className='w-full'>
                  <summary className='flex justify-between w-full'>
                    <div className='flex justify-center items-center space-x-4'>
                      <img src="/category.png" className='h-4' alt="Hirefy Logo" />
                      <p className='font-semibold text-lg text-[#2B3445]'>Categories</p>
                    </div>
                    <div className='arrow'></div>
                  </summary>
                  <ul className='border-l-2 space-y-2'>
                    {
                      categories.descendants.map((category, index) => (
                        <CategoryList key={index} category={category} />
                      ))
                    }
                  </ul>
                </details>
            </li>
          </ul>


          <footer className='inline-block self-end space-y-3 px-4 my-64'>
            <div className='flex justify-center items-center space-x-4 text-[#0D5287] text-sm'>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
              <p>Version</p>
            </div>
            <div className='w-full border-t-gray-300 [border-top-width:1px]'></div>
            <div className='font-semibold text-lg text-[#4B566B]'>© 2023 Hirefy, LLC.</div>
          </footer>
        </div>
      </section>
    </>
  )
}

export default App

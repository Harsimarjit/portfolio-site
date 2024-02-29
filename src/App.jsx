// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import img2 from "./assets/my-image3.jpg"

function App() {

  return (
    <>
    <div className='bg-gray-100 h-screen'> 
      <div className='flex justify-around p-20'>
        <div className='bg-gray-200 py-10 px-5'>
          <h3 className='text-3xl'>Harsimarjit Singh</h3>
          <p>I am a Software Enginner with passion for poblem solving with web development.</p>
        </div>
        <img className='size-96 rounded-3xl bg-red-500' src={img2} alt="Simar's image"/>
      </div>
    </div>
    </>
  )
}

export default App

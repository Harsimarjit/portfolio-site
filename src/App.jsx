// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import img2 from "./assets/my-image3.jpg"

function App() {

  return (
    <>
    <div className='bg-gray-300'> 
    
      <div className='flex flex justify-around p-20'>
        <img className='size-96 rounded-3xl' src={img2} alt="Simar's image"/>
        <div className='bg-gray-200 py-10 px-5 rounded-lg'>
          <h3 className='text-3xl '>Harsimarjit Singh</h3>
          <p>I am a Software Enginner with passion for poblem solving with web development.</p>
        </div>
      </div>

      <div className='bg-blue-100 py-8 px-4'>
        <div className='text-3xl m-4'>About</div>
        <div className='p-4 flex flex-col space-y-4'>
          <div >
            I am a passionate Software Engineer. I love to solve problems using web development technologies. 
            I want to build professional websites that have great UI/UX.
          </div>

          <div>
            <p className='font-semibold'>LinkedIn:</p> https://www.linkedin.com/in/harsimarjit-singh-676b37202/</div>
          <div>
            <p className='font-semibold'>Email:</p> simarbadding@gmail.com </div>
          <div>
            <p className='font-semibold'>City:</p> Toronto, ON </div>
          
          <div>
            I want to make features that solve everyday problems at scale. I feel I have the capability to breakdown a huge problem statement into small chunks, thereby enabling mme to analyse and implement solutions easily.
            
          </div>
        </div>
      </div>

      <div className='bg-rose-100 py-8 px-4'>
        <div className='text-3xl m-4'>Projects</div>
        <div className='p-4 flex flex-col space-y-4'>
          <div className='font-semibold text-lg'>Food Ordering Website</div>
          <ul>
            <li>Created a single page dynamic food ordering website, using which users can order their favorite dishes</li>
            <li>Search, filter using tags and many such user-friendly features have been added</li>
            <li>Used MEAN stack - MongoDB, Express, Angular, Node to implement both fronted and back-end API layer to perform CRUD - Create, Read, Update and Delete operations</li>
            <li>Implemented authentication and authorization using passport JWT tokens</li>
          </ul>
          <div className='font-semibold text-lg'>Unity3D Games</div>
          <ul>
            <li>Made multiple mobile games using Unity3D and uploaded 2 of them to Google Play Store</li>
            <li>Used Google Admob API to implement advertisement in one of the games</li>
            <li>Implemented shooting and platforming games targeted for PC both in 2D and 3D</li>
            <li>Accessible on Android Play Store: Cube Attack and .TicTacToe3D</li>
          </ul>
          <div  className='font-semibold text-lg'>JavaFX Application</div>
          <ul>
            <li>Used JavaFX linked to Oracle database to create a GUI for a grocery shop application</li>
            <li>Performed CRUD operations in this application</li>
          </ul>
        </div>

      </div>

    </div>
    </>
  )
}

export default App

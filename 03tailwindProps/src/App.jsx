import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './component/Card'
function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with tailwind</h1>
      <Card username="Manoj Raut"  post="Software Engineer" imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtUclxjPZR-3JBXSbW87ftHOG5bxtRH6HIQ&s"/>
      <Card username="Ntin Raut" post="Web Designer" imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLm_x6Z3U6K0almYFGWzJS4Wg5PJykoGJpQ&s"/>
      <Card username="Bhupendra Pawar" post="Software Engineer" imgURL="https://pbs.twimg.com/profile_images/1519851219313135616/aGV94IOE_400x400.jpg"/>

    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Cocktail from './pages/Cocktail'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Contact from './pages/Contact'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cocktail' element={<Cocktail/>}/>
        <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
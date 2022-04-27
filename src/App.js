import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Cocktail from './pages/Cocktail'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Ticket from './pages/Ticket'

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cocktail' element={<Cocktail/>}/>
        <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
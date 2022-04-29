import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CocktailList from '../components/CocktailList'
import SearchBar from '../components/SearchBar'

const Cocktail = () => {
  return (
    <section>
      <BreadCrumb>Cocktail</BreadCrumb>
      <SearchBar/>
      <CocktailList/>
    </section>
  )
}

export default Cocktail
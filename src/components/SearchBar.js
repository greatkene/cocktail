/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalContext } from '../context'

const SearchBar = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="flex items-center justify-center py-10">
      <form onSubmit={handleSubmit}>
        <div className="flex border-2 w-80 border-gray-200 rounded">
              <input 
                id='name' 
                type="text" 
                ref={searchValue} 
                className="px-1 py-2 w-80 text-center"  
                placeholder="Search Your Favorite Cocktail"
                onChange={searchCocktail}
              />
             
          </div>
      </form>
        
    </div>
  )
}

export default SearchBar
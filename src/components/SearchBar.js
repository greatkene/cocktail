import React from 'react'
import { useGlobalContext } from '../context'

const SearchBar = () => {
  const {setSearchTerm} = useGlobalContext()
  
  return (
    <div className="flex items-center justify-center py-10">
        <div className="flex border-2 border-gray-200 rounded">
            <input type="text" className="px-4 py-2 w-60"  placeholder="Search Your Favorite Cocktail" />
            <button className="p-4 text-white bg-gray-600 border-l">
                Search 
            </button>
        </div>
    </div>
  )
}

export default SearchBar
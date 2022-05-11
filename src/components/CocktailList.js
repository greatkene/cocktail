/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Cocktail from './Cocktail';

export default function CocktailList() {
  const {cocktails, loading} = useGlobalContext();

  if(loading) {
    return <Loading/>
  }

  if(cocktails.length < 1) {
    return (
      <h2 className='text-xl p-4 text-center'>No cocktails matched your search criteria</h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='text-center text-4xl mb-12'>Cocktails</h2>
      <div className='px-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

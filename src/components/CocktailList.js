/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

export default function CocktailList() {
    const {cocktails, loading} = useGlobalContext();

    if(loading) {
        return <Loading/>
    }

  return (
    <div>CocktailList</div>
  )
}

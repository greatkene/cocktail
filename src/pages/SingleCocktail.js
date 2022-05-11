import React from 'react'
import { useParams, Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'


const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(()=> {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json()
        if(data.drinks) {
          const {
            // Giving the parameter names an alias
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktails = {
            name, image, info, category, glass, instructions, ingredients
          }
          setCocktail(newCocktails)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])
  if(loading) {
    return <loading/>
  }
  if (!cocktail) {
    return <h2 className='text-xl p-4 text-center'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
  return (
    <section>
      <BreadCrumb>SingleCocktail</BreadCrumb>
      <div className='text-gray-700 p-5 body-font overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          
          <div className='lg:w-4/5 mx-auto flex justify-center flex-wrap'>
          <Link to='/cocktail' className='mb-5 btn'>
            Back To Cocktails
          </Link>
            <img alt='cocktail' 
              className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
              src={image}
              />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h1 className="font-bold py-2 text-2xl">
                   Name: <span className='font-medium text-xl'>{name}</span>
                </h1>
                <h1 className="font-bold py-2 text-2xl">
                   Category: <span className='font-medium text-xl'>{category}</span>
                </h1>
                <h1 className="font-bold py-2 text-2xl">
                   Info: <span className='font-medium text-xl'>{info}</span>
                </h1>
                <h1 className="font-bold py-2 text-2xl">
                   Glass: <span className='font-medium text-xl'>{glass}</span>
                </h1>
                <h1 className="font-bold py-2 text-2xl">
                   Instructions: <span className='font-medium text-xl'>{instructions}</span>
                </h1>
                <h1 className="font-bold py-2 text-2xl">
                   Ingredients: <span className='font-medium text-xl'>
                   {ingredients.map((item, index) => {
                      return item ? <span key={index}> {item}</span> : null
                    })}
                   </span>
                </h1>
              </div>
          </div>
        </div>
      </div>
    </section>
   
  )
}
}

export default SingleCocktail
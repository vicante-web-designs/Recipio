import Button from '../components/Button';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import { useState } from 'react';

interface Meals{
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;

}

function RecipesGallery() {

  const [recipes, setRecipes] = useState<Meals[]>([])

  const getRecipes = async (): Promise<void> => {

    let mealData: Meals[];

    try{
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')

        mealData = res.data.meals;
      }
      catch(err){
        console.log('Please try again', err)
      }

    for(let i = 0; i < 10; i++){
      setRecipes(prev => ([
          ...prev,
          mealData[i]
        ]))
    }
  }

  return(
    <section className='mx-auto my-4 w-fit'>
        <Button type='button' content='Get new recipe' onClick={getRecipes}/>
        
        <section className='flex gap-6 flex-wrap justify-center'>
          {
            recipes.map(meal => {
              return <RecipeCard 
                name={meal.strMeal}
                category={meal.strCategory}
                location={meal.strArea}
                instructions={meal.strInstructions}
                img={meal.strMealThumb}
                youtube={meal.strYoutube}
                source={meal.strSource}
              />
            })
          }
        </section>
    </section>
  )
}   

export default RecipesGallery;
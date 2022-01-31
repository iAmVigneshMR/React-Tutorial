import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [useringredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredientd => [...prevIngredientd, {id: Math.random().toString(), ...ingredient}
    ])
  }

  const removeIngredientHandler = ingredientId => {
    setUserIngredients(prevIngrediens => prevIngrediens.filter((ingredient) => ingredient.id !== ingredientId));
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={useringredients} onRemoveItem={removeIngredientHandler} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;

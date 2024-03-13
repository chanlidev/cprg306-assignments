"use client"

import { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error('Error fetching meal details:', error);
      return null;
    }
  };

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  const handleMealClick = async (mealId) => {
    const selectedMealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(selectedMealDetails);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}</p>
      ) : (
        <ul>
          {meals.map((meal, index) => (
            <li
              key={meal.idMeal}
              onClick={() => handleMealClick(meal.idMeal)}
              style={{
                background: 'darkblue',
                color: 'white',
                padding: '10px',
                marginBottom: '8px',
                borderRadius: '10px',
                width: '300px',
              }}
            >
              {meal.strMeal}
              {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                <ul style={{ fontSize: '0.9em', marginLeft: '20px' }}>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                    const ingredientKey = `strIngredient${index}`;
                    const measureKey = `strMeasure${index}`;
                    const ingredient = selectedMeal[ingredientKey];
                    const measure = selectedMeal[measureKey];

                    if (ingredient && ingredient.trim() !== '') {
                      return (
                        <li key={ingredientKey}>
                          {measure && measure.trim() !== '' ? `${measure} - ` : ''}
                          {ingredient}
                        </li>
                      );
                    }

                    return null;
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;

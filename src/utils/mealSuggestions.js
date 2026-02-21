export const getSuggestedMeals = (meals, child) => {
  if (!meals || !child) return [];

//  Filter for  active meals
  const activeMeals = meals.filter(meal => meal.isActive);

  // Remove meals for  child allergens
  const safeMeals = activeMeals.filter(meal =>
    !meal.allergens.some(allergen =>
      child.allergens.includes(allergen)
    )
  );

  
  // only by dietary preference match
  const rankedMeals = safeMeals.sort((a, b) => {
    const aMatch = a.dietaryTags.includes(child.dietaryPreference);
    const bMatch = b.dietaryTags.includes(child.dietaryPreference);
    if (aMatch === bMatch) return 0;
    return aMatch ? -1 : 1;
  });


  return rankedMeals.slice(0, 3);
};
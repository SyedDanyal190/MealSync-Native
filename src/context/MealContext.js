import React, { createContext, useReducer } from "react";
import mealsData from "../mock-data/meal.json";

export const MealContext = createContext();

const initialState = {
  meals: mealsData,
};

const mealReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MEAL":
      return {
        ...state,
        meals: state.meals.map(meal =>
          meal.id === action.payload
            ? { ...meal, isActive: !meal.isActive }
            : meal
        ),
      };

    default:
      return state;
  }
};

export const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState);

  return (
    <MealContext.Provider value={{ meals: state.meals, dispatch }}>
      {children}
    </MealContext.Provider>
  );
};
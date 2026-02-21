# MealSync - React Native App

**Platform:** React Native (Expo)  
**Data:** Mock JSON provided  

## Description

MealSync is a React Native app that demonstrates:

- **Meal Menu** with suggested meals based on a selected child’s allergens and dietary preferences.  
- **Admin screen** to toggle meals Active/Inactive, updating the Meal Menu instantly.  
- **Child Selector** to switch between children (Emma & Liam).  
- **Top 3 Suggested Meals** filtered for allergens and ranked by dietary preference.  
- All state management is handled using **Context + useReducer**.  

## Screens

### 1. Meal Menu
- Scrollable list of meal cards:
  - Name  
  - Price (CAD)  
  - Cuisine tag  
  - Allergens  
- **Child Selector** at the top  
- **Suggested for You** section showing **top 3 safe meals**  

### 2. Admin
- List of meals with **Active / Inactive toggle buttons**  
- Changes instantly reflected in the Meal Menu  
- Header styled with background color and centered text

  ## How to Run

## How to Run

- Clone the repository:  
  `git clone <repo-url>`  

- Navigate into the project folder:  
  `cd MealSync`  

- Install dependencies:  
  `npm install`  
  *or*  
  `yarn install`  

- Start the app:  
  `npx expo start`  

- Open in Expo Go on your device or simulator



## File Structure

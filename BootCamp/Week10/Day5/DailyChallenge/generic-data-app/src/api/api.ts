const API_URL: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';
const API_KEY: string = '37caa17adbmsh79a6dbcaa3b5d0bp13ae9ajsn7bb1e3241c1b';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  },
};

export const fetchRandomRecipe = async () => {
  try {
    const response = await fetch(API_URL, options);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};